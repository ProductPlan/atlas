import React from 'react';
import {render, screen,fireEvent, waitFor} from '@testing-library/react';
import AtlasBanner from '@components/AtlasBanner'

describe("AtlasBanner", () => {
    it("renders banner title", () => {
        const { container } = render(
            <AtlasBanner
            title="Dogs are great."
            leadingIcon={<i className="fas fa-circle-check"></i>}
            />
        )
        const content = screen.getByText("Dogs are great.")
        expect(container).toMatchSnapshot();
        expect(content).toBeTruthy();
        })

    it("renders banner with a button", async() => {
        const handleClick= jest.fn()
        const {container} = render(
            <AtlasBanner
            label="Click Me!"
            title="Cats are great."
            leadingIcon={<i className="fas fa-circle-check"></i>}
            trailingIcon={<i className="fas fa-xmark"></i>}
            type="destructive"
            handleClick = {handleClick}
        />
        )
        expect(container).toMatchSnapshot()
        await waitFor(()=>expect(screen.getByText("Click Me!")).toBeTruthy())
        fireEvent.click(screen.getByText("Click Me!"))
        expect(handleClick).toHaveBeenCalled();
    })

    it("renders dismissable banner and checks banner is closed", () => {
        const handleClose = jest.fn();
        const {container} = render(
            <AtlasBanner
            title="Birds are great."
            leadingIcon={<i className="fas fa-circle-check"></i>}
            trailingIcon={<i className="fas fa-xmark"></i>}
            isDismissable
            handleClose = {handleClose}
        />
        )
        expect(container).toMatchSnapshot()
        const content = screen.getByText("Birds are great.")
        expect(content).toBeTruthy();
        fireEvent.click(screen.getByRole('button', {name: 'close'}))
        expect(handleClose).toHaveBeenCalled();
        expect(screen.queryByText("Birds are great.")).toBeFalsy();
    })
})
