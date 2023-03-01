import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AtlasAlert, {alertTypes} from '@components/AtlasAlert'

describe("AtlasAlert", () => {
    it("renders alert content", () => {
    const { container } = render(
        <AtlasAlert
        content="This is a default alert."
        icon={<i className="fas fa-circle-info"></i>}
        />
    )
    const content = screen.getByText("This is a default alert.")
    expect(container).toMatchSnapshot();
    expect(content).toBeTruthy();
    })

    it("renders alert title", () => {
        const { container } = render(
            <AtlasAlert
            title="Finding Nemo"
            content="Just keep swimming."
            icon={<i className="fas fa-circle-info"></i>}
            />
        )
        const title = screen.getByText("Finding Nemo")
        expect(container).toMatchSnapshot();
        expect(title).toBeTruthy();
        })

    it("renders a button", async () => {
        const handleClick = jest.fn();
        const {container} = render(
            <AtlasAlert
            content="This is the content."
            icon={<i className="fas fa-circle-info"></i>}
            label='Click Me!'
            handleClick = {handleClick}
        />
        )
        expect(container).toMatchSnapshot()
        await waitFor(()=> expect(screen.getByText("Click Me!")).toBeTruthy())
        fireEvent.click(screen.getByText("Click Me!"))
        expect(handleClick).toHaveBeenCalled();
    })

    describe("when using different types", () => {
        alertTypes.forEach((type) => {
            it(`renders a ${type} alert`, () => {
                const {container} = render(
                    <AtlasAlert content={`This is a ${type} alert.`}
                    icon={<i className="fas fa-circle-info"></i>} />
                )
                expect(container).toMatchSnapshot();
            })
        })
    })
})