import './adminTable.sass'
import {Table, withTableActions, Button ,Switch} from '@gravity-ui/uikit';
import React, {  useState  } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { completeOrder ,deleteOrder, } from '../../store/redusers/orderSlice';
import ModalCreate from '../nodalCreate copy/modalCreate';
import ModalUpdate from '../modalUpdate/modalUpdate';
import { setSelectedOrder } from '../../store/redusers/selectedOrderSlice'; 



interface IOrder{
  ATILink: any ;
  Id: string;
  date: string;
  firm: string;
  transporter: string;
  tel: string;
  comment: string;
  status: string;
}



function AdminTable() {
  let [hideComplet, setHideComplet] = useState(false)
  let [openModalCreate, setOpenModalCreate] = useState(false)
  let [openModalUpdate, setOpenModalUpdate] = useState(false)

  let value = useAppSelector(state => state.orderSliceReduser)
  const dispatch = useAppDispatch()

  const MyTable = withTableActions(Table);
  const columns = [
  {id: 'Заявка'}, {id: 'Дата'}, {id: 'Фирма'},{id: 'ФИО'},{id: 'Коментарий'} ,{id: 'Телефон'} ,{id: 'Статус'} ,{id: 'Ati'} 
  ];
  const data = createOrder();


function openModalCreateFnc(){
  setOpenModalCreate(!openModalCreate)
}


function openModalUpdateFnc(id:IOrder){
  dispatch(setSelectedOrder(id))
  setOpenModalUpdate(!openModalUpdate)
}

function hideUpdateModal(){
  setOpenModalUpdate(false)
}


function createOrder(){
  let data = []
  for( let item of value){
    console.log('item.status',item.status,item.status === 'Завершенно' )
    if(hideComplet && item.status === 'Завершенно'){continue};
    let elem= {
      Id: item.id,
      Заявка: item.id,
      Дата:item.date,
      Фирма:item.company,
      Телефон:item.tel,
      ФИО:item.ferryman,
      Коментарий:item.comment,
      Статус:item.status,
      Ati:<React.Fragment>{<a href={`https://ati.su/firms/${item.ATICode}/info`}>{`https://ati.su/firms/${item.ATICode}/info`}</a>}</React.Fragment>
    }
    data.push(elem)
  }
  return data
}



  const getRowActions = () => {
    return [
      {
        text: 'Завершить',
        handler: (e:any) => {dispatch(completeOrder(e.Id))},
      },
      {
        text: 'Удалить ',
        handler: (e:any) => {dispatch(deleteOrder(e.Id))},
      },
      {
        text: 'Редактировать ',
        handler: (e:any) => {openModalUpdateFnc(e.Id)},
      },
    ];
  }
  


    return (
      <>
        <div className="table-center">
          <div className="cont-table">
          <div className="cont-btn">
            <Button view="action" size="l" className='btn' onClick={()=>{openModalCreateFnc()}}>Создать</Button>
            <Switch  defaultChecked={hideComplet} onChange={()=>{setHideComplet(!hideComplet)}} size="l" content="Скрыть выполенные" ></Switch>
          </div>
          <ModalCreate  openModalFnc={openModalCreateFnc}   open={openModalCreate}/>
          <ModalUpdate  hide={hideUpdateModal}  open={openModalUpdate}/>
          <MyTable stickyHorizontalScrollBreakpoint={400} stickyHorizontalScroll={false}  className={'admin-table'} getRowActions={getRowActions} edgePadding={true}  data={data} columns={columns}  />
        </div>
        </div>
      </>
    )
}

export default AdminTable

