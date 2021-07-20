import React, { Component } from "react";

class TodoList extends Component {
        // MEMO: props are arguments passed into React components.
        constructor(props) {
        super(props);

        // MEMO: he state object is where you store property values that belongs to the component.
        this.state = {
            items: []
        };
        
        // MEMO: bind() method, to pass the arguments to a function in the class based components.
        //       Needed to be bind, otherwise 'this' would be changed.
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";

            console.log(this.state.items);

        }

        // Stop reroad
        e.preventDefault();
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    {/* function is in form */}
                    <form onSubmit={this.addItem}>
                        {/* DONT KNOW HERE under score and ref*/}

                        <input ref={(a) => this._inputElement = a} placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;