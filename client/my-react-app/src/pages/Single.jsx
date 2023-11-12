import React from 'react'
import Avatar from '../img/avatar.jpg'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import { Menu } from '../components/Menu'

export const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <div className="img">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="user">
          <img src={Avatar} alt="" />
          <div className="info">
            <span>Brian</span>
            <p>发布于2分钟前</p>
          </div>
          <div className="edit">
            <Link to={`write/?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>flex布局中，flex:1的作用</h1>
        <p>在Flex布局中，flex: 1是一个常用的CSS属性，它用于设置一个Flex容器中的Flex项（Flex items）的相对大小或占据剩余空间的比例。这个属性通常用于平分或分配额外的空间给Flex项，以实现灵活的布局。
        <br/>
        具体来说，flex: 1的作用包括以下几个方面：
        <br/>
        分配剩余空间：当Flex容器中的Flex项没有指定固定的宽度或高度时，它们会根据各自的flex属性值来分配容器中的剩余空间。如果所有的Flex项都设置了flex: 1，它们会等分剩余的可用空间。
        <br/>
        等宽或等高：如果所有的Flex项都使用相同的flex值（例如都是flex: 1），它们将具有相等的宽度或高度，以便平均分配可用空间。
        <br/>
        根据比例分配空间：如果Flex容器中的Flex项的flex属性值不同，那么它们将按照这些值的比例来分配剩余空间。例如，如果一个Flex项的flex值为2，而另一个Flex项的flex值为1，前者将获得比后者多一倍的可用空间。
        <br/>
        占据全部可用空间：flex: 1会让Flex项占据所有可用的剩余空间，而不会有固定的宽度或高度。
        <br/>
        总之，flex: 1用于创建灵活的布局，使Flex项可以根据容器的大小和内容的变化来自动调整它们的大小，以实现响应式设计。当多个Flex项都设置为flex: 1时，它们会平均分配剩余的空间，以适应不同的屏幕尺寸或布局需求。</p>
      </div>
      <Menu></Menu>
    </div>
  )
}
