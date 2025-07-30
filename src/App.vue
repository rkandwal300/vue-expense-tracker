<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpense :income="income" :expenses="expenses" />
    <TransactionList :transactions="transactions" :handleRemoveTransaction="handleRemoveTransaction" />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>

</template>

<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpense from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionsList.vue';
import AddTransaction from './components/AddTransaction.vue';
import { ref, computed, onMounted } from 'vue'
import { useToast } from "vue-toastification";
const toast = useToast();
const dummyTransaction = [
  { id: 1, text: "Flower", amount: -19.99 },
  { id: 2, text: "Salary", amount: 299.97 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 }
]
let transactions = ref(dummyTransaction);
onMounted(() => {
  const savedTransaction = JSON.parse(localStorage.getItem('transaction'));
  if (savedTransaction) {
    transactions.value = savedTransaction
  }
})
// get total
const total = computed(() => transactions.value.reduce((acc, val) => acc + val.amount, 0))
// get income 
const income = computed(() => transactions.value.filter(v => v.amount > 0).reduce((acc, val) => acc + val.amount, 0).toFixed(2))
// get expenses
const expenses = computed(() => transactions.value.filter(v => v.amount < 0).reduce((acc, val) => acc + val.amount, 0).toFixed(2))

const handleRemoveTransaction = (id) => {
  transactions.value = transactions.value.filter(t => t.id != id);
  toast.success("Entry removed success fully.");
  saveTransactionToLocalStorage();
}

const handleTransactionSubmitted = (data) => {
  transactions.value.push({
    id: transactions.value.length,
    ...data
  });
  toast.success("Entry added success fully.");
  saveTransactionToLocalStorage();
}

const saveTransactionToLocalStorage= () =>{
 localStorage.setItem('transaction', JSON.stringify(transactions.value));
}

</script>
