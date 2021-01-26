<template>
	<view class="page">
		<!-- 视频播放 -->
		<view class="player">
			<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"  controls class="movice"></video>
		</view>
		<!-- 影片基本信息 -->
		<view class="info">
			<image :src="img" class="img" @click="click"></image>
			<view class="desc">
				<view class="title">{{title}}</view>
				<view class="basic">2018 / 美国 / 科幻 动作</view>
				<view class="basic">原名:{{title}}</view>
				<view class="basic">影片时长：140分钟以上</view>
				<view class="basic">上映时间：2013-05-01(中国大陆)</view>
				<view class="score">
					<view>
						<view class="words">综合评分：</view>
						<view class="number">8.2</view>
					</view>
					<view class="score-stars">
						<image class="stars" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3499129681,804401333&fm=26&gp=0.jpg"></image>
						<view class="thumb">8200人点赞</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 剧情介绍 -->
		<view class="line-wapper">
			<view class="line"></view>
		</view>
		<view class="plots">
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">~~~~</view>
		</view>
		<!-- 演职人员 -->
		<view class="scroll">
			<view class="plots-title">演职人员</view>
			<scroll-view class="scroll-list" scroll-x>
				<view class="actor-wapper" v-for="(direct ,directIndex) in directArray" :key="direct.id">
					<image :src="direct.url" class="actor" mode="aspectFill"
					 @click="lookMe" :data-directIndex="directIndex"></image>
					<view class="actor-name">{{direct.name}}</view>
					<view class="actor-role">{{direct.actName}}</view>
				</view>
			</scroll-view>
		</view>
		<!-- 剧照 -->
		<view class="scroll">
			<view class="plots-title">剧照</view>
			<scroll-view class="scroll-list" scroll-x>
				<image v-for="(img , imgIndex) in plotArray" :key="img.id" 
				:src="img.img" class="plot-img" mode="aspectFill" 
				@click="look" :data-imgIndex="imgIndex"></image>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				title:'',
				img:'',
				directArray:[
					{
						id:0,
						name:'肖战',
						actName:'xxx',
						url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=255597920,3138002035&fm=26&gp=0.jpg'
					},
					{
						id:1,
						name:'肖战',
						actName:'xxx',
						url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=255597920,3138002035&fm=26&gp=0.jpg'
					},
					{
						id:2,
						name:'肖战',
						actName:'xxx',
						url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=255597920,3138002035&fm=26&gp=0.jpg'
					},
					{
						id:3,
						name:'肖战',
						actName:'xxx',
						url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=255597920,3138002035&fm=26&gp=0.jpg'
					},
					{
						id:4,
						name:'肖战',
						actName:'xxx',
						url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=255597920,3138002035&fm=26&gp=0.jpg'
					}
				],
				plotArray:[
					{
						id:0,
						img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1529888062,3645843288&fm=11&gp=0.jpg'
					},
					{
						id:1,
						img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1529888062,3645843288&fm=11&gp=0.jpg'
					},
					{
						id:2,
						img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1529888062,3645843288&fm=11&gp=0.jpg'
					},
					{
						id:3,
						img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1529888062,3645843288&fm=11&gp=0.jpg'
					},
					{
						id:4,
						img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1529888062,3645843288&fm=11&gp=0.jpg'
					}
				],
				info:{
					id:0,
					name:''
				}
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo');
		},
		onHide() {
			this.videoContext.pause();
		},
		onShow() {
			// if(this.videoContext){
			// 	this.videoContext.play();
			// }
		},
		onLoad(params) {
			//获取上一个页面的参数
			var me =this;
			me.id = params.listId;
			me.title = params.listName;
			var listImg = params.listImg+"&fm="+params.fm+"&gp="+params.gp;
			me.img = listImg;
			// console.log(listImg);
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:"#A9A9A9",
				animation: {
					duration: 400,
					timingFunc: 'easeIn'
				}
			});
		},
		//仅支持在小程序端的分享，可分享到微信群或者微信好友
		onShareAppMessage(res) {
			var me =this;
			return{
				title: me.info.name,
				path:'/pages/movice/movice?listId='+ me.info.id
			}
		},
		//监听导航栏按钮
		onNavigationBarButtonTap() {
			var index = e.index;
			// var info =me.info;
			// var infoId =info.id;
			// var infoName =info.name;
			
			if(index == 0){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "分享",
				    summary: "摘要",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			}
		},
		methods: {
			click(e){
				var listImg = this.img;
				uni.navigateTo({
					url:"../cover/cover?listImg="+listImg
				})
			},
			look(e){
				var me = this;
				var imgIndex = e.currentTarget.dataset.imgindex;
				console.log(me.plotArray);
				uni.previewImage({
					current:  me.plotArray[imgIndex],
					urls: me.plotArray
				});
			},
			lookMe(e){
				var me = this;
				var directIndex = e.currentTarget.dataset.directindex;
				uni.previewImage({
					current:  me.directArray[directIndex],
					urls: me.directArray
				});
			},
		}
	}
</script>

<style>
	@import url("movice.css");
</style>
