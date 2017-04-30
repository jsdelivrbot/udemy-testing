import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// user descript to group together similar tests
describe('App' , () => {
  // // Use 'beforeEach' to run code beforEach 'it' block
  // beforeEach(() => {
  //   component = renderComponent(App);
  // });
    // // Use 'it' to test a single attribute of a target
  // it('shows the correct text', ()=>{

  //   // create an instance of component app
  //   const component = renderComponent(App);

  //   // Use 'expect' to make an 'assertion' about a target
  //   expect(component).to.contain('React simple starter');
  // })

  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  })

  it('shows comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  })
  
});
