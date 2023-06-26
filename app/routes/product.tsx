import { Link, Outlet } from "@remix-run/react"
import { Menu } from "antd"
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label:React.ReactNode,
  key:React.Key,
  children?:MenuItem[],
  type?:"group",

):MenuItem{
  return {
    key,
    children,
    label,
    type
  }as MenuItem;
}

const items:MenuItem[]=[
  getItem("Fake Store",'1'),
  getItem("Home",'2'),
  getItem("Men",'3',[
    getItem('Option ', '4'),
    getItem('Option ', '5'),
  ]),
  getItem("Women",'6',[
    getItem('Option ', '7'),
    getItem('Option ', '8'),
    getItem('Option ', '9'),

  ])
]
export default function productRoute() {
  return (
    
      <Layout>
        <Outlet/>
      </Layout>
    
  )
}
function Layout({children}){
  return(
    <>
    <Menu mode="horizontal"
       defaultSelectedKeys={['2']}
      //  items={items}
    >
      <Menu.Item >
      <Link to='/product' className="logo"> 
        Fake Store
      </Link>
      </Menu.Item>
      <Menu.Item>
          <Link to="/product">Home</Link>
        </Menu.Item>
      <Menu.Item >
      <Link to='/product/men'>Men</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to='/product/women'>Women</Link>
      </Menu.Item>
    </Menu>
    <div className="container">
      {children}
    </div>
    </>
  )
}