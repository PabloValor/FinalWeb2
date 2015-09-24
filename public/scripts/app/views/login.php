<!-- Modal Trigger -->
<div class="col">
    <a class='btn' href='#demoModal' modal>Show Modal</a>
</div>
<!-- Modal Structure -->
<div id="demoModal" class="modal">
    <div class="modal-content">
        <h4>Modal header</h4>
        <ul>
            <li ng-repeat="employee in employees">
                {{employee.Nombre }} {{employee.Apellido}} Edad: {{employee.Edad}}
            </li>
        </ul>
    </div>
    <div class="modal-footer">
        <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
</div>