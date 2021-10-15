export default {
    HelloWorld: () => import(/* webpackChunkName: 'helloworld' */ '@/components/HelloWorld.vue'),
    Component1: () => import( /* webpackChunkName: 'foo-component1' */ '@/components/Component1.vue'),
    Component2: () => import( /* webpackChunkName: 'foo-component2' */ '@/components/Component2.vue'),
    Component3: () => import( /* webpackChunkName: 'foo-component3' */ '@/components/Component3.vue'),
    Component4: () => import( /* webpackChunkName: 'foo-component4' */ '@/components/Component4.vue')
}
