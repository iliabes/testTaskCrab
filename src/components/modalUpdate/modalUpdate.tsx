import './modalUpdate.sass'
import { useEffect, useState } from 'react';
import {Modal,Button, Label,TextInput} from '@gravity-ui/uikit';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateOrder } from '../../store/redusers/orderSlice';
import {Select} from '@gravity-ui/uikit';


interface IModalUpdate{
  hide:()=>void,
  open:boolean
}

function ModalUpdate(props:IModalUpdate) {
  console.log('modal update')
  let [name, setName] = useState('')
  let [comment, setComment] = useState('')
  let [company, setCompany] = useState('')
  let [tel, setTel] = useState('')
  let [status, setStatus] = useState('В работе')
  const dispatch = useAppDispatch()
  let numberOrder = useAppSelector(state => state.modalWind.selectedOrder)
  let allOrders = useAppSelector(state => state.orderSliceReduser)
  let selectedOrder = getSelectedSlide(numberOrder)





  useEffect(()=>{
    selectedOrder = getSelectedSlide(numberOrder)
    setName(selectedOrder?.ferryman || 'имя не заданно')
    setComment(selectedOrder?.comment || 'имя не заданно')
    setCompany(selectedOrder?.company || 'имя не заданно')
    setTel(selectedOrder?.tel || 'имя не заданно')
  },[numberOrder])



  function getSelectedSlide(numberSlide:any){
    for (let order of allOrders){
      if(Number(order.id) === Number(numberSlide)){return order}
    }
  }

  function updOrder(){
    let order= {
      id: selectedOrder?.id,
      date: selectedOrder?.date,
      company: company,
      ferryman: name,
      tel: tel,
      comment: comment,
      status: status,
      ATICode: selectedOrder?.ATICode,
    }

    dispatch(updateOrder(order))
    props.hide()
  }


    return (
      <>
        <Modal  open={props.open} >
        <div className="cont">
        <form className='Form-update'>
          <legend>Редактировать заявку</legend>
          <Label className='Form-label'  theme="clear" size="m">Имя</Label>
          <TextInput value={name} onChange={el => setName(el.target.value)} placeholder='Ваше имя' size="l" />
          <Label className='Form-label' theme="clear"size="m">Компания</Label>
          <TextInput value={company} onChange={el => setCompany(el.target.value)} placeholder='Ваша компания' size="l" />
          <Label className='Form-label' theme="clear" size="m">Телеффон</Label>
          <TextInput placeholder='Ваш телефон' value={tel} onChange={el => setTel(el.target.value)} size="l" />
          <Label className='Form-label' theme="clear" size="m">Комментарий</Label>
          <TextInput placeholder='Комментарий' value={comment} onChange={el => setComment(el.target.value)} size="l" />
          <Label className='Form-label' theme="clear" size="s">Статус</Label>
          <Select defaultValue={['В работе']} onUpdate={(e:any)=>{setStatus(e)}}  size="xl" multiple={false}>
            <Select.Option value="В работе">В работе</Select.Option>
            <Select.Option value="Завершенно">Завершенно</Select.Option>
          </Select>
          <Button view="action" size="l"  onClick={()=>{updOrder()}} >Редактировать</Button>
  
        </form>
        </div>
        </Modal>
      </>
    )
}
export default ModalUpdate