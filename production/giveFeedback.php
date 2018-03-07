<?php include("template/header.php") ?>



<div class="section-feedback">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2>Оставить отзыв об отдыхе на озере Гарда</h2>
                <div class="wrap-form">
                    <div class="line_green"></div>
<form>
    <div class="row">
    <label for="name">Ваше Имя: </label>
    <input class="input" name="name" type="text"/>
    </div>
    <div class="row">
    <label for="name">Ваш email: </label>
    <input class="input" name="email" type="text" />
    </div>
    <div class="row">
        <label for="name">Откуда приехали: </span></label>
        <input class="input" name="" type="text" />
    </div>
    <div class="row">
        <label for="name">Место отдыха: </span></label>
        <input class="input" name="" type="text" />
    </div>
    <div class="row calendar">
        <label for="name">Когда отдыхали: </span></label>
        <span>с</span>
        <input id="datepicker" name="" type="text" placeholder="дд.мм.гггг"/>
        <span class="bedore-feedb">по</span>
        <input id="datepicker2"  name="" type="text" placeholder="дд.мм.гггг"/>
    </div>
    <div class="row">
        <label for="name">Оценка отдыха:</span></label>
        <div class="check-star assessment">
            <span class="checkmark-star"></span>
            <span class="checkmark-star"></span>
            <span class="checkmark-star"></span>
            <span class="checkmark-star"></span>
            <span class="checkmark-star"></span>
            <input type="hidden" name="stars" value="">
            <span class="hint_star"></span>
        </div>
    </div>
    <div class="row">
        <label for="name">Тема отзыва: </label>
        <input class="input" name="" type="text" />
    </div>
    <div class="row">
        <label for="name">Текст отзыва: </label>
        <textarea name="commit" ></textarea>
    </div>
    <div class="row">
        <label for="name">Загрузить фото: </span></label>
        <input class="input" name="photo"  type="file" placeholder="Прикрепить фото"/>
    </div>


    <div class="send_rewiev">
        <button class="framedButton">Отправить отзыв</button>
    </div>

</form>


                    <div class="line_green"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="section-garda-rew"></div>

<?php include("template/popUps.php") ?>
<?php include("template/footer.php") ?>