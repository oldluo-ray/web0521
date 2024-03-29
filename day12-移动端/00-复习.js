/*

    1. css像素, 是程序员写的像素值
    2. 设备独立像素: 决定了1个css像素,最终被多少个物理像素渲染
    3. 像素比: 屏幕分辨率宽度 / 设备独立像素宽度 


    图片高清显示: 

        问题: 位图在高清屏上,会失真
        原因: 位图是由位图像素组成,如果一个位图像素被多个物理像素渲染,就会失真. 如果一个位图像素,被一个物理像素渲染,就不会失真
        解决办法: 
            根据媒体查询,获取当前设备的像素比,如果像素比是2,则使用2倍图,如果像素比为3,则使用3倍图

        在js中获取像素比: 
            window.devicePixelRatio

    
    视口: 

        移动端: 
            布局视口
                决定了页面的布局. 默认值980px 
                获取布局视口的宽度: document.documentElement.clientWidth
            视觉视口
                就是用户看到的可视区. 默认值也是980. 缩放时,视觉视口会变化.但是视觉视口,不会影响布局
            理想视口
                开启理想视口,改变布局视口的宽度. 默认布局视口的宽度,被改成了设备独立像素的宽度
                <meta  name="viewport" content="width=device-width, initial-scale=1.0"/>


            width  
                取值: device-width/数字
                device-width就代表当前设备的设备独立像素的宽度
                数字,有兼容问题,一般不适用

            initial-scale
                间接的改变了布局视口

                值 = 设备独立像素的宽度 / 布局视口的宽度

            width和initial-scale的值冲突时,谁的值大,听谁的


            










*/