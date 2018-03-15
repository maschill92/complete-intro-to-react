// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

test('Search renderers correctly', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amound of shows', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on the search term', () => {
  const searchTerm = 'black';
  const component = shallow(<Search shows={preload.shows} />);
  component.find('input').simulate('change', { target: { value: searchTerm } });
  const showCount = preload.shows.filter(show =>
    `${show.title} ${show.description}`.toUpperCase().includes(searchTerm.toUpperCase())
  ).length;

  expect(component.find(ShowCard).length).toEqual(showCount);
});
