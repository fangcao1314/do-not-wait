/**
* @author shelly
* @description 现金弹窗界面
* @date 2017-05-10
**/
import React from 'react';
import { Modal, message } from 'antd';
import './cash_popup.css';

class CashPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: this.props.defaultMoney };
  }
  // 点击数字键盘
  handleClick = e => {
    let value = e.target.innerHTML;
    let inputVal = this.state.price;
    if (value >= 0 && value <= 9) {
      inputVal = inputVal.concat(value);
    } else if (value === '.') {
      if (!inputVal.includes('.')) {
        inputVal = inputVal.concat(value);
      }
    }
    this.setState({ price: inputVal });
  };

  // 点击退格
  handleBack = e => {
    let inputVal = this.state.price + '';
    inputVal = inputVal.substring(0, inputVal.length - 1);
    this.setState({ price: inputVal });
  };

  render() {
    return (
      <div id="cash-popup">
        <Modal
          title={this.props.title}
          visible={true}
          maskClosable={false}
          okText="确定"
          cancelText="放弃"
          width={510}
          height={546}
          footer={null}
          wrapClassName="cash-popup-modal"
          onCancel={() => {
            if (this.props.onCancel) {
              this.props.onCancel();
            }
          }}
        >
          <input
            type="text"
            value={this.state.price}
            className="price-input"
            placeholder="0"
            readOnly
          />
          <div id="num-key">
            <ul>
              <li className="number" onClick={this.handleClick}>
                1
              </li>
              <li className="number" onClick={this.handleClick}>
                2
              </li>
              <li className="number" onClick={this.handleClick}>
                3
              </li>
              <li
                className="back iconfont icon-order_btn_back"
                onClick={this.handleBack}
              />
              <li className="number" onClick={this.handleClick}>
                4
              </li>
              <li className="number" onClick={this.handleClick}>
                5
              </li>
              <li className="number" onClick={this.handleClick}>
                6
              </li>
              <li
                className="clear-all"
                onClick={() => {
                  if (this.props.onCancel) {
                    this.props.onCancel();
                  }
                }}
              >
                取消
              </li>
              <li className="number" onClick={this.handleClick}>
                7
              </li>
              <li className="number" onClick={this.handleClick}>
                8
              </li>
              <li className="number" onClick={this.handleClick}>
                9
              </li>
              <li className="cancle" />
              <li className="number" onClick={this.handleClick}>
                0
              </li>
              <li className="number" onClick={this.handleClick}>
                00
              </li>
              <li className="number" onClick={this.handleClick}>
                .
              </li>
              <li
                className="confirm"
                onClick={() => {
                  if (this.props.onOk) {
                    if (
                      parseFloat(this.state.price) === 0 ||
                      this.state.price === ''
                    ) {
                      message.info('请输入金额');
                    } else {
                      this.props.onOk(this.state.price);
                    }
                  }
                }}
              >
                确定
              </li>
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CashPopup;
