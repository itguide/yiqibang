<template>
    <div>
        <nav class="navbar-default navbar-static-top">
            <div class="container">
                <el-row :gutter="24">
                    <div class="bg-header">
                        <slot></slot>
                    </div>
                </el-row>
            </div>
        </nav>
    </div>
</template>
<style>
.bg-header {
    height: 64px;
    width: 100%;
    background: #2986ce;
    text-align: center;
    font-size: 18px;
    color: #fff;
    line-height: 64px;
    padding: 0px;
    margin: 0px;
}
</style>
