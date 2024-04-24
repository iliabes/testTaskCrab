import './search.sass'
import {TextInput} from '@gravity-ui/uikit';
import { memo } from 'react';




interface ISerach{
    changeSearchValue:(val:string)=>void,
    searchVal:string
}

function Search(props:ISerach) {
  return (
    <>
    <div className="Search-cont">
        <div className="Search-cont-center">
            <TextInput onChange={(e)=>{props.changeSearchValue(e.target.value)}} value={props.searchVal} placeholder="Поиск по ФИО"  />
        </div>
    </div>
    </>
  )

}



export default  memo(Search)