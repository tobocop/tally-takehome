import { Starships, StarshipsProps } from "./Starships";
import { render, screen, waitFor } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { favoritesState } from "./favorites/favoritesState";
import { makeStarship } from "../testHelpers/makers/makeStarship";
import userEvent from "@testing-library/user-event";

describe("Starships", () => {
  let props: StarshipsProps
  beforeEach(() => {
    props = {
      ships: [],
      showNotes: false
    }
  });

  it("shows which ships are favorites", () => {
    const favoriteShip = makeStarship();
    props.ships = [
      makeStarship(),
      favoriteShip,
    ]

    render(<RecoilRoot initializeState={({set}) => set(favoritesState, [favoriteShip])}>
      <Starships {...props} />
    </RecoilRoot>)

    const ships = screen.queryAllByTestId("ship")
    expect(ships.length).toEqual(2)
    expect(ships[0].querySelectorAll('[checked]').length).toEqual(0)
    expect(ships[1].querySelectorAll('[checked]').length).toEqual(1)
  })

  it("lets users add and remove favorite ships", async () => {
    props.ships = [makeStarship()]

    render(<RecoilRoot><Starships {...props} /></RecoilRoot>)

    const ships = screen.queryAllByTestId("ship")
    expect(ships.length).toEqual(1)
    const firstShipFavorite = ships[0].querySelector("input[type='checkbox']") as HTMLInputElement
    expect(firstShipFavorite.checked).toBeFalsy()
    userEvent.click(firstShipFavorite)
    await waitFor(() => expect(firstShipFavorite.checked).toBeTruthy());

    userEvent.click(firstShipFavorite)
    await waitFor(() => expect(firstShipFavorite.checked).toBeFalsy());
  })

  it('stores notes in state for favorites', () => {
    const notesShip = makeStarship({notes: "some-notes"});
    props.ships = [notesShip]
    props.showNotes = true

    render(<RecoilRoot initializeState={({set}) => set(favoritesState, [notesShip])}>
      <Starships {...props} />
    </RecoilRoot>)

    const notes = screen.getAllByPlaceholderText("Add text")
    expect(notes.length).toEqual(1)
    const notesBox = notes[0] as HTMLTextAreaElement;
    expect(notesBox.value).toEqual("some-notes")
  })
})
