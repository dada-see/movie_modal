import { useState } from "react";

const Header = ({setYearCategory, setSearch, search}) => {
    const [selectYear, setSelectYear] = useState('all');

    const clickBtn = (year) => {
        setSelectYear(year);
        setYearCategory(year);
    }

    const changeSearch = (e) => {
        setSearch(e.target.value)
    }

    return(
        <div className="header">
            <h1>MOVIE LIST🎬</h1>
            <div className="search">
                <span className="material-symbols-outlined">search</span>
                <input type="text" placeholder="Search" onChange={changeSearch} value={search} />
            </div>
            <div className="yearMovie">
                <p>그 해의 영화</p>
                <div>
                    <button
                        onClick={() => clickBtn('all')}
                        className={selectYear==='all' ? 'active' : ''}
                    >ALL</button>
                    <button
                        onClick={() => clickBtn(2020)}
                        className={selectYear===2020 ? 'active' : ''}
                    >2020</button>
                    <button
                        onClick={() => clickBtn(2021)}
                        className={selectYear===2021 ? 'active' : ''}                      
                    >2021</button>
                    <button
                        onClick={() => clickBtn(2022)} 
                        className={selectYear===2022 ? 'active' : ''}                 
                    >2022</button>
                    <button
                        onClick={() => clickBtn(2023)}
                        className={selectYear===2023 ? 'active' : ''}
                    >2023</button>
                </div>
            </div>
        </div>
    )
}

export default Header;