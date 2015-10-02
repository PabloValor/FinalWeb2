<!--<div cg-busy="myPromise"></div>-->

<form ng-submit="login()">
    <div class="row">
        <div class="input-field col s12">
            <input id="user" type="text" class="validate" ng-model="formData.user" required>
            <label for="user" data-error="mal" data-success="">Usuario</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
            <input id="password" type="password" class="validate" ng-model="formData.password" required>
            <label for="password" data-error="mal" data-success="">Clave</label>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12 center-align">
            <input type="submit" class="btn-large">
        </div>
    </div>
</form>