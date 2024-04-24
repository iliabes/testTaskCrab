import './userTable.sass'
import {Table, withTableActions, Switch} from '@gravity-ui/uikit';
import React, {useState,useCallback, useMemo} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { completeOrder} from '../../store/redusers/orderSlice';
import Search from '../search/search';


  



function cargoTable() {
  let [hideComplet, setHideComplet] = useState(false)
  let [searchVal, setSearchVal] = useState('')
  let value = useAppSelector(state => state.orderSliceReduser)
  const dispatch = useAppDispatch()


  

  
  const dataTable = useMemo(()=>{
    let data = []
    for( let item of value){
      if(hideComplet && item.status === 'Завершенно'){continue};
      if(searchVal && item.ferryman.toLowerCase().indexOf(searchVal.toLowerCase())< 0) {continue};
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
  },[value,hideComplet,searchVal])


  const changeSearchValue =  useCallback((val:string)=>{
    setSearchVal(val)
  },[searchVal])
    


  //таблица
  const MyTable = withTableActions(Table);
  const columns = [{id: 'Заявка'}, {id: 'Дата'}, {id: 'Фирма'},{id: 'ФИО'},{id: 'Телефон'} ,{id: 'Коментарий'}  ,{id: 'Статус'} ,{id: 'Ati'} ];
  const getRowActions = () => {
    return [
      {
        text: 'Завершить',
        handler: (e:any) => {dispatch(completeOrder(e.Id))},
      },
    ];
  }
  
    return (
      <>
        <div className="table-center">
          <div className="cont-table">
          <Search changeSearchValue={changeSearchValue}  searchVal={searchVal}/>
          <Switch defaultChecked={hideComplet} onChange={()=>{setHideComplet(!hideComplet)}} size="l" content="Скрыть выполенные" ></Switch>
          <MyTable  edgePadding={true} className={'user-table'} data={dataTable} columns={columns}  getRowActions={getRowActions}/>
          </div>
        </div>
      </>
    )
}

export default cargoTable