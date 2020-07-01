<template>
    <div>
        <v-row>
            <v-col cols="2">
                <v-list>
                    <v-list-item-group>
                        <v-list-item v-for="(item,i) in menu" v-bind:key="i" color="primary" v-bind:to="item.router">
                            <v-list-item-icon>
                                <v-icon>{{item.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{item.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
            <v-col cols="9">
                <router-view></router-view>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "AdminMain",
        data: () => ({
            menu: [
                {name: "信息", icon: "mdi-account-heart-outline", router: '/admin/show'},
                {name: "新增", icon: "mdi-account-multiple-plus-outline", router: '/admin/add'},
            ],
        }),
        beforeDestroy() {
            sessionStorage.clear();
        }
    }
</script>

<style scoped>

</style>