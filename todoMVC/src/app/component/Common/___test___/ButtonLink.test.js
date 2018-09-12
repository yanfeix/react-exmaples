import React from 'react';
import renderer from 'react-test-renderer';
import ButtonLink from '../ButtonLink';
import { FilterType } from '../../../constant';

it(' ButtonLink is created and click event is captured ', () => {
    const mockOnClicked = jest.fn();
    const component = renderer.create(
        <ButtonLink text="Completed" filterType={FilterType.COMPLETED} onClick={mockOnClicked} />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick();
    expect(mockOnClicked).toHaveBeenCalled();
});
