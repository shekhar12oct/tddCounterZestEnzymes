import React from 'react';  
import { render, screen } from '@testing-library/react';

// Importing shallowing is to just test only that component which is called in the test m ethod not its child method
//Importing Configure is to make the configuration of the enzymes adapter
import { shallow,configure } from 'enzyme';


import Adapter from 'enzyme-adapter-react-16';


//Importing the component needs to be tested 
import App from './App';

import Counter from './Counter.component';

//configure is to make the configuration of the enzymes adapter.
configure({ adapter: new Adapter() });



describe("Testing the Counter Application",()=>{
    const wrapper= shallow(<App />);
    
    //testing case 1
    test("Testing Paragraph value",()=>{
        expect(wrapper.find('#p1').text()).toBe("Hello Test Driven Deployment Coding!!!");
    })


    //testing case 2
    test("Testing button increament",()=>{
        const wrapper=shallow(<Counter/>);
        expect(wrapper.find('button').text()).toBe("Click Me");
    })
    
     //testing case 3
     test("Checking the button click event",()=>{
         const wrapper=shallow(<Counter/>);
         wrapper.find("#btn-click").simulate('click');
         expect(wrapper.find('#value2').text()).toBe('1');
     })

})