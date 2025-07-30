<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="t in transactions" :key="t.id" :class="t.amount < 0 ? 'minus' : 'plus'">
            {{ t.text }} <span>{{ t.amount }}</span>
            <button class="delete-btn" @click="handleRemoveTransaction(t.id)">x</button>
        </li>
    </ul>
</template>

<script setup>
import {defineProps} from'vue'
const {handleRemoveTransaction, transactions} = defineProps({
    transactions:{
        type: Array,
        required: true
    }, handleRemoveTransaction:{
        type : Function,
        required: true
    }
})
</script>