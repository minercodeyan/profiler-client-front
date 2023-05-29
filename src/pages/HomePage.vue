<template>
  <div class="home-content">
    <h1>Добро пожаловать</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut ut odio vel purus eleifend iaculis et quis augue. Vivamus sollicitudin consequat dolor,
      eu lacinia mauris hendrerit id. Mauris cursus posuere ultrices. Mauris in maximus urna, at venenatis orci.
      Ut viverra ut nulla sit amet fringilla. Duis posuere eget purus ac consequat. Fusce consequat ligula ac bibendum vulputate.
      Maecenas id dolor at lectus accumsan dapibus ac et dui. Vestibulum commodo feugiat augue, non dictum ante lacinia
    </p>
    <p class="author">
      Автор <a href="/goggl">Артем кулакович</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
.home-content{
  margin: 100px;
}
.home-content h1{
  font-size: 27px;
  margin-bottom: 30px;
}
.author{
  margin-top: 20px;
}
</style>