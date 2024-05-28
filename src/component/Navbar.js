import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate,setAuthenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
  
  const navigate = useNavigate()

  const goToLogin = () => { 
    navigate('/login')
  }
  const goToHome = () => { navigate('/')}

  const search = (event) => { 
    if (event.key === 'Enter') { 
      //입력한 검색어를 읽어와서->url을 변경
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
      <div className='login-btn'>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>
     
          <div className='nav-section'>
              <img
                  onClick={goToHome}
                  width={100}
                  alt='logo'
                  src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-700x394.png' />
        </div>
          <div className='menu-area'>
                <ul className='menu-list'>
                      {menuList.map((menu) => <li>{ menu }</li>)}
                </ul>
              
                <div className='search'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <input type='text' onKeyPress={(event)=>search(event)}/>
                </div>
          </div>  
    </div>
  )
}

export default Navbar