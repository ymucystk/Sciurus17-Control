"use client";
import * as React from 'react'
import Controller from './controller.js'

export default function Home() {
  const [rendered,set_rendered] = React.useState(false)
  const robotNameList = ["KinovaGen3Lite"]
  const [robotName,set_robotName] = React.useState(robotNameList[0])
  const [body_rotate,set_body_rotate] = React.useState(0)
  const [h1_rotate,set_h1_rotate] = React.useState(0)
  const [h2_rotate,set_h2_rotate] = React.useState(0)
  const [r1_rotate,set_r1_rotate] = React.useState(170)
  const [r2_rotate,set_r2_rotate] = React.useState(0)
  const [r3_rotate,set_r3_rotate] = React.useState(0)
  const [r4_rotate,set_r4_rotate] = React.useState(156)
  const [r5_rotate,set_r5_rotate] = React.useState(0)
  const [r6_rotate,set_r6_rotate] = React.useState(76)
  const [r7_rotate,set_r7_rotate] = React.useState(0)
  const [r8_rotate,set_r8_rotate] = React.useState(0)
  const [l1_rotate,set_l1_rotate] = React.useState(170)
  const [l2_rotate,set_l2_rotate] = React.useState(0)
  const [l3_rotate,set_l3_rotate] = React.useState(0)
  const [l4_rotate,set_l4_rotate] = React.useState(156)
  const [l5_rotate,set_l5_rotate] = React.useState(0)
  const [l6_rotate,set_l6_rotate] = React.useState(76)
  const [l7_rotate,set_l7_rotate] = React.useState(0)
  const [l8_rotate,set_l8_rotate] = React.useState(0)
  const [c_pos_x,set_c_pos_x] = React.useState(0)
  const [c_pos_y,set_c_pos_y] = React.useState(0.35)
  const [c_pos_z,set_c_pos_z] = React.useState(0.6)
  const [c_deg_x,set_c_deg_x] = React.useState(0)
  const [c_deg_y,set_c_deg_y] = React.useState(0)
  const [c_deg_z,set_c_deg_z] = React.useState(0)
  let registered = false

  const robotChange = ()=>{
    const get = (robotName)=>{
      let changeIdx = robotNameList.findIndex((e)=>e===robotName) + 1
      if(changeIdx >= robotNameList.length){
        changeIdx = 0
      }
      return robotNameList[changeIdx]
    }
    set_robotName(get)
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      require("aframe");
      setTimeout(set_rendered(true),1000)
      console.log('set_rendered')

      if(!registered){
        registered = true
        AFRAME.registerComponent('robot-click', {
          init: function () {
            this.el.addEventListener('click', (evt)=>{
              robotChange()
              console.log('robot-click')
            });
          }
        });
      }
    }
  }, [typeof window])

  const controllerProps = {
    robotName, robotNameList, set_robotName,
    body_rotate,set_body_rotate,
    h1_rotate,set_h1_rotate,h2_rotate,set_h2_rotate,
    r1_rotate,set_r1_rotate,r2_rotate,set_r2_rotate,
    r3_rotate,set_r3_rotate,r4_rotate,set_r4_rotate,r5_rotate,set_r5_rotate,
    r6_rotate,set_r6_rotate,r7_rotate,set_r7_rotate,r8_rotate,set_r8_rotate,
    l1_rotate,set_l1_rotate,l2_rotate,set_l2_rotate,
    l3_rotate,set_l3_rotate,l4_rotate,set_l4_rotate,l5_rotate,set_l5_rotate,
    l6_rotate,set_l6_rotate,l7_rotate,set_l7_rotate,l8_rotate,set_l8_rotate,
    c_pos_x,set_c_pos_x,c_pos_y,set_c_pos_y,c_pos_z,set_c_pos_z,
    c_deg_x,set_c_deg_x,c_deg_y,set_c_deg_y,c_deg_z,set_c_deg_z
  }

  const robotProps = {
    robotNameList, robotName, body_rotate, h1_rotate, h2_rotate,
    r1_rotate, r2_rotate, r3_rotate, r4_rotate, r5_rotate, r6_rotate, r7_rotate, r8_rotate,
    l1_rotate, l2_rotate, l3_rotate, l4_rotate, l5_rotate, l6_rotate, l7_rotate, l8_rotate
  }

  if(rendered){
    return (
    <>
      <a-scene>
        <a-plane position="0 0 0" rotation="-90 0 0" width="10" height="10" color="#7BC8A4" shadow></a-plane>
        <Assets/>
        <Select_Robot {...robotProps}/>
        <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="1 0.5 1"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 0.2" position="-1 1 -1"></a-entity>
        <a-entity id="rig" position={`${c_pos_x} ${c_pos_y} ${c_pos_z}`} rotation={`${c_deg_x} ${c_deg_y} ${c_deg_z}`}>
          <a-camera id="camera" cursor="rayOrigin: mouse;" position="0 0 0"></a-camera>
        </a-entity>
      </a-scene>
      <Controller {...controllerProps}/>
    </>
    );
  }else{
    return(
      <a-scene>
        <Assets/>
      </a-scene>
    )
  }
}

const Assets = ()=>{
  return (
    <a-assets>
      {/*IGUS_REBEL*/}
      <a-asset-items id="base" src="Sciurus17_base.gltf" ></a-asset-items>
      <a-asset-items id="body" src="Sciurus17_body.gltf" ></a-asset-items>
      <a-asset-items id="h1" src="Sciurus17_h1.gltf" ></a-asset-items>
      <a-asset-items id="h2" src="Sciurus17_h2.gltf" ></a-asset-items>
      <a-asset-items id="r1" src="Sciurus17_r1.gltf" ></a-asset-items>
      <a-asset-items id="r2" src="Sciurus17_r2.gltf" ></a-asset-items>
      <a-asset-items id="r3" src="Sciurus17_r3.gltf" ></a-asset-items>
      <a-asset-items id="r4" src="Sciurus17_r4.gltf" ></a-asset-items>
      <a-asset-items id="r5" src="Sciurus17_r5.gltf" ></a-asset-items>
      <a-asset-items id="r6" src="Sciurus17_r6.gltf" ></a-asset-items>
      <a-asset-items id="r7" src="Sciurus17_r7.gltf" ></a-asset-items>
      <a-asset-items id="r8_1" src="Sciurus17_r8_1.gltf" ></a-asset-items>
      <a-asset-items id="r8_2" src="Sciurus17_r8_2.gltf" ></a-asset-items>
      <a-asset-items id="l1" src="Sciurus17_l1.gltf" ></a-asset-items>
      <a-asset-items id="l2" src="Sciurus17_l2.gltf" ></a-asset-items>
      <a-asset-items id="l3" src="Sciurus17_l3.gltf" ></a-asset-items>
      <a-asset-items id="l4" src="Sciurus17_l4.gltf" ></a-asset-items>
      <a-asset-items id="l5" src="Sciurus17_l5.gltf" ></a-asset-items>
      <a-asset-items id="l6" src="Sciurus17_l6.gltf" ></a-asset-items>
      <a-asset-items id="l7" src="Sciurus17_l7.gltf" ></a-asset-items>
      <a-asset-items id="l8_1" src="Sciurus17_l8_1.gltf" ></a-asset-items>
      <a-asset-items id="l8_2" src="Sciurus17_l8_2.gltf" ></a-asset-items>
    </a-assets>
  )
}

const KinovaGen3Lite = (props)=>{
  const {visible, body_rotate, h1_rotate, h2_rotate,
    r1_rotate, r2_rotate, r3_rotate, r4_rotate, r5_rotate, r6_rotate, r7_rotate, r8_rotate,
    l1_rotate, l2_rotate, l3_rotate, l4_rotate, l5_rotate, l6_rotate, l7_rotate, l8_rotate,
  } = props
  return (<>{visible?
    <a-entity gltf-model="#base" position="0 0 0" rotation={`0 0 0`}>
      <a-entity gltf-model="#body" position="0 0 0" rotation={`0 ${body_rotate} 0`}>
        <a-entity gltf-model="#h1" position="0 0.471 0.0808" rotation={`0 ${h1_rotate} 0`}>
          <a-entity gltf-model="#h2" position="0.000015 0.054035 0" rotation={`${h2_rotate} 0 0`}></a-entity>
        </a-entity>
        <a-entity gltf-model="#r1" position="-0.09647 0.42 0.081" rotation={`${r1_rotate} 0 0`}>
          <a-entity gltf-model="#r2" position="-0.064 0 -0.00011" rotation={`0 0 ${r2_rotate}`}>
            <a-entity gltf-model="#r3" position="0 0.050946 0" rotation={`0 ${r3_rotate} 0`}>
              <a-entity gltf-model="#r4" position="0 0.199 -0.00003" rotation={`${-r4_rotate} 0 0`}>
                <a-entity gltf-model="#r5" position="0 0.121034 0" rotation={`0 ${r5_rotate} 0`}>
                  <a-entity gltf-model="#r6" position="0 0.1294 0" rotation={`${r6_rotate} 0 0`}>
                    <a-entity gltf-model="#r7" position="0 0.0191 0" rotation={`0 ${r7_rotate} 0`}>
                      <a-entity gltf-model="#r8_1" position="0 0.024 -0.012" rotation={`${-r8_rotate} 0 0`}></a-entity>
                      <a-entity gltf-model="#r8_2" position="0 0.024 0.012" rotation={`${r8_rotate} 0 0`}></a-entity>
                    </a-entity>
                  </a-entity>
                </a-entity>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
        <a-entity gltf-model="#l1" position="0.09647 0.42 0.081" rotation={`${l1_rotate} 0 0`}>
          <a-entity gltf-model="#l2" position="0.064 0 -0.00011" rotation={`0 0 ${l2_rotate}`}>
            <a-entity gltf-model="#l3" position="0 0.050946 0" rotation={`0 ${l3_rotate} 0`}>
              <a-entity gltf-model="#l4" position="0 0.199 -0.00003" rotation={`${-l4_rotate} 0 0`}>
                <a-entity gltf-model="#l5" position="0 0.121034 0" rotation={`0 ${l5_rotate} 0`}>
                  <a-entity gltf-model="#l6" position="0 0.1294 0" rotation={`${l6_rotate} 0 0`}>
                    <a-entity gltf-model="#l7" position="0 0.0191 0" rotation={`0 ${l7_rotate} 0`}>
                      <a-entity gltf-model="#l8_1" position="0 0.024 -0.012" rotation={`${-l8_rotate} 0 0`}></a-entity>
                      <a-entity gltf-model="#l8_2" position="0 0.024 0.012" rotation={`${l8_rotate} 0 0`}></a-entity>
                    </a-entity>
                  </a-entity>
                </a-entity>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
      </a-entity>
    </a-entity>:null}</>
  )
}

const Select_Robot = (props)=>{
  const {robotNameList, robotName, ...rotateProps} = props
  const visibletable = robotNameList.map(()=>false)
  const findindex = robotNameList.findIndex((e)=>e===robotName)
  if(findindex >= 0){
    visibletable[findindex] = true
  }
  return (<>
    <KinovaGen3Lite visible={visibletable[0]} {...rotateProps}/>
  </>)
}









