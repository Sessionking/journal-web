import React, {Component} from 'react'
import {Input, DatePicker, Button, Form} from 'antd'
import './index.less'

const FormItem = Form.Item
const formItemLayout = {
  labelCol: {span: 4},
  wrapperCol: {span: 18},
}
@Form.create()
export default class DiaryCaseEntry extends Component {
  render() {
    const {getFieldDecorator} = this.props.form

    return (
      <Form className="case-entry-form">
        <FormItem {...formItemLayout} label="事件名称">
          {getFieldDecorator('caseName', {
            rules: [
              {
                required: true,
                message: '事件名称必填',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="日期">
          {getFieldDecorator('caseDate')(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="地点">
          {getFieldDecorator('location')(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="人物">
          {getFieldDecorator('character')(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="备注">
          {getFieldDecorator('remark')(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>
    )
  }
}
