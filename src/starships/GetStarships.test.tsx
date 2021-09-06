import { render, screen } from "@testing-library/react";
import { GetStarships } from "./GetStarships";
import { MemoryRouter } from "react-router";
import { Loadable, RecoilRoot } from "recoil";
import { StarshipsResponse } from "./Starship";
import { makeRecoilLValueLoadable } from "../testHelpers/makers/makeRecoilLValueLoadable";
import { makeStarshipsResponse } from "../testHelpers/makers/makeStarshipsResponse";
import { makeStarship } from "../testHelpers/makers/makeStarship";

const mockUseRecoilValueLoadable: Loadable<StarshipsResponse> = makeRecoilLValueLoadable();
jest.mock('recoil', () => ({
  ...jest.requireActual('recoil'),
  useRecoilValueLoadable: () => mockUseRecoilValueLoadable
}));

describe("GetStarships", () => {
  it('indicates when data is loading', () => {
    mockUseRecoilValueLoadable.state = "loading"

    render(<MemoryRouter><GetStarships /></MemoryRouter>)

    expect(screen.queryByText("Loading...")).toBeTruthy()
  })

  it('shows users errors when they happen', () => {
    mockUseRecoilValueLoadable.state = "hasError"
    mockUseRecoilValueLoadable.contents = "some-error"

    render(<MemoryRouter><GetStarships /></MemoryRouter>)

    expect(screen.queryByText("Loading...")).toBeFalsy()
    expect(screen.queryByText("Call to get starships has errored. Please try again later")).toBeTruthy()
  })

  it("displays a list of starships", () => {
    mockUseRecoilValueLoadable.state = "hasValue"
    mockUseRecoilValueLoadable.contents = makeStarshipsResponse({
      results: [
        makeStarship({name: "some-starship"}),
        makeStarship({name: "some-other-starship"})
      ]
    })

    render(<RecoilRoot><MemoryRouter><GetStarships /></MemoryRouter></RecoilRoot>)

    expect(screen.queryByText("Loading...")).toBeFalsy()
    const ships = screen.queryAllByTestId("ship")
    expect(ships.length).toEqual(2)
    const shipText = ships.map(s => s.textContent)
    expect(shipText[0]).toContain("some-starship")
    expect(shipText[1]).toContain("some-other-starship")
  })
})
