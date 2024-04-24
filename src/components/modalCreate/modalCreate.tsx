import './modalCreate.sass'
import {useState } from 'react';
import {Button, Modal, Label,TextInput} from '@gravity-ui/uikit';
import { createOrder } from '../../store/redusers/orderSlice';
import { increaseOrder } from '../../store/redusers/numberOrder';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getCurrentDate, generateAti}  from '../../helpers/helpers';









function ModalCreate(props: { open: boolean | undefined; openModalFnc: () => void; }) {
  let [name, setName] = useState('')
  let [comment, setComment] = useState('')
  let [company, setCompany] = useState('')
  let [tel, setTel] = useState('')
  let numberOrder = useAppSelector(state => state.numberOrderReduser)
  
  const reset = () =>{
    setName('');
    setComment('')
    setCompany('')
    setTel('')
  }

  function addOrder(){
    event?.preventDefault()
    let order= {
      id: numberOrder,
      date: getCurrentDate(),
      company: company ,
      ferryman: name,
      tel: tel,
      comment: comment || 'Нет комментария',
      status: 'Новая',
      ATICode: generateAti(),
    }
    reset()
    dispatch(increaseOrder())
    dispatch(createOrder(order))
  }



  const dispatch = useAppDispatch()
 
  

    return (
      <>
        <Modal  open={props.open} onClose={() => (props.openModalFnc())}>
        <form className="Form-create" >
          <legend>Создать заявку</legend>
          <Label className='Form-label'  theme="clear" size="m">Имя</Label>
          <TextInput value={name} onChange={el => setName(el.target.value)} placeholder='Ваше имя' size="l" />
          <Label className='Form-label' theme="clear"size="m">Компания</Label>
          <TextInput value={company} onChange={el => setCompany(el.target.value)} placeholder='Ваша компания' size="l" />
          <Label className='Form-label' theme="clear" size="m">Телеффон</Label>
          <TextInput placeholder='Ваш телефон' value={tel} onChange={el => setTel(el.target.value)} size="l" />
          <Label className='Form-label' theme="clear" size="m">Комментарий</Label>
          <TextInput placeholder='Комментарий' value={comment} onChange={el => setComment(el.target.value)} size="l" />
          <Button view="action" size="l"  onClick={()=>{addOrder()}} >Создать</Button>
        </form>
        </Modal>
      </>
    )
}

export default ModalCreate