/**
 * QueueAnim Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const QueueAnim = require('rc-queue-anim');
const Form = require('uxcore-form');
const Button = require('uxcore-button');

const { SelectFormField, NumberInputFormField } = Form;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {
        type: 'right',
        duration: 450,
      },
      show: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  saveRef(refName) {
    const me = this;
    return (c) => {
      me[refName] = c;
    };
  }

  handleClick() {
    const me = this;
    const data = this.form.getValues();
    if (data.pass) {
      this.setState({
        formData: data.values,
        show: false,
      });
      setTimeout(() => {
        me.setState({
          show: true,
        });
      }, parseInt(this.state.formData.duration, 10) + (4 * 100) + 150);
    }
  }

  renderItems() {
    if (!this.state.show) return null;
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(<div className="demo-item" key={i}>{`${i} enter in queue`}</div>);
    }
    return items;
  }

  render() {
    return (
      <div>
        <Form jsxvalues={this.state.formData} ref={this.saveRef('form')}>
          <SelectFormField
            jsxname="type"
            jsxlabel="动画类型"
            jsxdata={[
              { value: 'left', text: 'left' },
              { value: 'right', text: 'right' },
              { value: 'top', text: 'top' },
              { value: 'bottom', text: 'bottom' },
              { value: 'scale', text: 'scale' },
              { value: 'scaleBig', text: 'scaleBig' },
              { value: 'scaleX', text: 'scaleX' },
              { value: 'scaleY', text: 'scaleY' },
            ]}
          />
          <NumberInputFormField
            jsxname="duration"
            jsxlabel="时间"
            jsxRules={{
              validator: (value) => {
                let pass = false;
                try {
                  parseInt(value, 10);
                  pass = true;
                } catch (e) {
                  console.error(e.stack);
                }
                return pass;
              },
              errMsg: '不能解析为数字',
            }}
          />
        </Form>
        <Button onClick={this.handleClick}>切换动效</Button>
        <QueueAnim type={this.state.formData.type} duration={this.state.formData.duration}>
          {this.renderItems()}
        </QueueAnim>
      </div>
    );
  }
}

module.exports = Demo;
