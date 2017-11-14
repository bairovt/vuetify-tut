export default (value) => {
  return value.toLocaleString('ru-RU', {'month': 'long', day: '2-digit', year: 'numeric', hour: '2-digit',
    minute: '2-digit'
  })
}