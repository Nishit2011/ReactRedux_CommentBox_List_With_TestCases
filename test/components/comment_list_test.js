import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';


describe('CommentList',()=>{
let component;
	beforeEach(()=>{
		//a third argument passed to renderComponent method
		//will show up as props in the component
		//the component here is CommentList, where we are 
		//added a comments object

		const props = {comments:['New Comment','Other Comment']};
		component= renderComponent(CommentList, null,props);

	});

	it('shows an LI for each comment',()=>{

		expect(component.find('li').length).to.equal(2);

	});

	it('shows each comment that is provided',()=>{

		expect(component).to.contain('New Comment');
		expect(component).to.contain('Other Comment');

	})
})