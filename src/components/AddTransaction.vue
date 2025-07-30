<template>
    <h3>Add new Transaction</h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" required id="text" v-model="text" placeholder="Enter Text...." />
        </div>
        <div class="form-control">
            <label for="amount">Amount <br /> (negative - expense, positive - income)</label>
            <input type="number" required id="amount" v-model="amount" placeholder="Enter amount......" />
        </div>
        <button class="btn" :disabled="!text.trim() || amount === ''">Add Transaction</button>
    </form>
</template>

<script setup>
import { ref, defineEmits } from "vue"
import { useToast } from "vue-toastification";
const emit = defineEmits(['transactionSubmitted'])
const toast = useToast();
const text = ref("")
const amount = ref("")
const onSubmit = () => {
    if (!text.value) {
        toast.error("Please enter proper text ")
    }
    if (!amount.value) {
        toast.error("Please enter proper text.")
    }

    const data = {
        text: text.value,
        amount: parseFloat(amount.value)
    }
    emit("transactionSubmitted", data)

    text.value = "";
    amount.value = "";
}
</script>