var React = require('react');

var DynamicField = React.createClass({

    addQA: function (e) {
        e.preventDefault();
        var list = this.state.QAList;
        list.push({ "question": "", "answer": "" });
        this.setState({ QAList: list });
    },
    removeQA: function (index) {
        var list = this.state.QAList;
        list.splice(index, 1);
        this.setState({ QAList: list });
    },
    getInitialState: function () {
        return {
            QAList: [],
            currentIndex: 0
        };
    },
    updateQuestion: function (evt) {
        this.setState({
            inputValue: { Questions: evt.target.value }
        });

        var value = evt.target.value;

        var list = this.state.QAList;
        var answer = list[this.state.currentIndex].answer;
        list[this.state.currentIndex] = { "question": value, "answer": answer };
        this.setState({ QAList: list });
    },
    updateAnswer: function (evt) {
        this.setState({
            inputValue: { Questions: evt.target.value }
        });

        var value = evt.target.value;
        var list = this.state.QAList;
        var question = list[this.state.currentIndex].question;
        list[this.state.currentIndex] = { "question": question, "answer": value };
        this.setState({ QAList: list });
    },
    assignIndex: function (index) {
        this.setState({
            currentIndex: index
        });
    },
    getValue: function(){
        return this.state.QAList;
    },
    render: function () {

        return (
            <div className="form-group">
                <div className="col-sm-4">
                    {this.state.QAList.map(function (input, index) {
                        var ref = "input_" + index;

                        return (
                            <div className="input-group" key={index} ref="QA" >
                                <input type="text" className="form-control margin-bottom-12px" placeholder={this.props.placeholder0}
                                    onFocus={this.assignIndex.bind(this, index)} ref={ref} value={this.state.QAList[index].question}
                                    onChange={this.updateQuestion} />
                                <span className="input-group-addon" onClick={this.removeQA.bind(this, index)} id={ref} ></span>
                                <textarea type="text" className="form-control margin-bottom-12px" onFocus={this.assignIndex.bind(this, index)}
                                    placeholder={this.props.placeholder1} value={this.state.QAList[index].answer} onChange={this.updateAnswer}
                                    ref={ref} />
                                <span className="input-group-addon" onClick={this.removeQA.bind(this, index)} id={ref} >
                                    <button className="success button small" type="submit">Remove</button></span>
                            </div>
                        )
                    }.bind(this)
                  )}
                    <button className="btn btn-success btn-block success button expanded" onClick={this.addQA} type="submit">{this.props.nameButton}</button>
                </div>
            </div>
        );
    }
});
module.exports = DynamicField;
