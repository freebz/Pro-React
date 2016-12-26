// ref

    <input ref="myInput" />

let input = this.refs.myInput;
let inputValue = input.value;
let inputRect = input.getBoundingClientRect();


class FocusText extends Component {
    handleClick() {
	// 원시 DOM API를 이용해 텍스트 입력으로 포커스 전환
	this.refs.myTextInput.focus();
    }
    render() {
	// ref 특성은 컴포넌트가 마운팅될 때
	// 컴포넌트에 대한 참조를 this.ref에 추가
	return (
	    <div>
		<input type="text" ref="myTextInput" />
		<input
	           type="button"
	           value="Focus the text input"
	           onClick={this.handleClick.bind(this)}
		/>
	    </div>
	);
    }
}
