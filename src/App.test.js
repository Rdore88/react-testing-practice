import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

describe('<App />', () => {
    test('it renders <App /> component', ()=> {
        const component = mount(<App />);
        expect(component).toHaveLength(1)
    })

    test('it increments counter on button click', () => {
        const component = mount(<App />);
        expect(component.state('score')).toEqual(0);
        component.find(".btn-increment").simulate('click');
        })

    test('it decrements counter on button click', () => {
        const component = mount(<App />);
        component.setState({score: 1});
        expect(component.state('score')).toEqual(1);
        component.find(".btn-decrement").simulate('click');
        expect(component.state('score')).toEqual(0);
})

    test('it changes to red when score is <= 0', () => {
        const component = mount(<App />);

        component.setState({score: 0});
        expect(component.instance().scoreColor()).toEqual('red');
        component.setState({score: -1})
    })

    test('it changes to green when score it > 0', () => {
      const component = mount(<App />);
      component.setState({score: 1});
      expect(component.instance().scoreColor()).toEqual('green')
    })

})
