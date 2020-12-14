import React, {Component} from 'react'
import AMapLoader from '@amap/amap-jsapi-loader';

import './index.css'

let map;
let AMap;

export default class MyMap extends Component{
    render() {
        return (
            <div className="myMap">
                <div id="container"></div>
                <p>当前所在位置为：{}</p>
                <p>当前位置的编码为: {}</p>
                <p>
                    你想要查询的位置 <input type="text" />
                    <button>查询</button>
                </p>
                <p>当前天气为:{}</p>
            </div>
        )
    }
    componentDidMount() {
        this.getMapObject().then(this.getLocation)
    }
    getLocation = () => {
        const that = this
        AMap.plugin('AMap.Geolocation', function() {
            const geolocation = new AMap.Geolocation({
              // 是否使用高精度定位，默认：true
              enableHighAccuracy: true,
              // 设置定位超时时间，默认：无穷大
              timeout: 10000,
              // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
              buttonOffset: new AMap.Pixel(10, 20),
              //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
              zoomToAccuracy: true,     
              //  定位按钮的排放位置,  RB表示右下
              buttonPosition: 'RB'
            })
            map.addControl(geolocation);
          
            geolocation.getCurrentPosition(function(status,result){
                  if(status=='complete'){
                      onComplete(result)
                  }else{
                      onError(result)
                  }
            });       
            function onComplete (data) {
              // data是具体的定位信息
              console.log('onComplete', data)
              that.getAddress([data.position.lat, data.position.lng])
            }
          
            function onError (data) {
              // 定位出错
            }
          })
    }
    getMapObject = () => {
        return new Promise((resolve) => {
            AMapLoader.load({
                "key": "0bc1145b1e635d4b7d5054a119a2ad32" // 申请好的Web端开发者Key，首次调用 load 时必填
            }).then((res)=>{
                AMap = res
                map = new AMap.Map('container');
                resolve({
                    map,
                    AMap
                })
            }).catch(e => {
                console.log(e);
            })
        })
    }
    getAddress = (lnglat) => {
        AMap.plugin('AMap.Geocoder', function() {
            const geocoder = new AMap.Geocoder({
              // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
              city: 'beijing'
            })
            geocoder.getAddress(lnglat, function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                  // result为对应的地理位置详细信息
                  console.log('result', result)
              }
            })
          })
    }
}
