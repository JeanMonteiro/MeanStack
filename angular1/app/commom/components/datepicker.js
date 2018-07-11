angular.module('primeiraApp').component('datePicker', {
    bindings: {
        id: '@',
        label: '@',
        type: '@',
        grid: '@',
        model: '=',
        placeholder: '@',
        readonly: '<'
    },

    controller: [ 'gridSystem', '$timeout', '$element', function(gridSystem, $timeout, $element) {
        var changeDateModel = function(ev){
            controller.model = ev.target.value;
        };

        var datepickerElement = $element[0];

        $timeout(function () {

            var month =     $(datepickerElement).find('.datepicker-month');
            var year =      $(datepickerElement).find('.datepicker-year');
            var generic =   $(datepickerElement).find('.datepicker');

            if(month.length > 0){
                month.datepicker({
                    autoclose: true,
                    format: 'mm',
                    viewMode: "months",
                    minViewMode: "months"
                }).on('changeDate', function () {
                    angular.element($(this)).triggerHandler('input');
                });
            }else if(year.length > 0){
                year.datepicker({
                    autoclose: true,
                    format: 'yyyy',
                    viewMode: "years",
                    minViewMode: "years"
                }).on('changeDate', function () {
                    angular.element($(this)).triggerHandler('input');
                });
            }else{
                generic.datepicker({
                    autoclose: true,
                    format: 'dd/mm/yyyy'
                }).on('changeDate', function () {
                    angular.element($(this)).triggerHandler('input');
                });
            }

        })

        this.$onInit = function (){
            var type = this.type != undefined ? this.type : "datepicker";
            this.type = type;
            this.gridClasses = gridSystem.toCssClasses(this.grid)
        }
    }],

    template: `
    <div class="{{ $ctrl.gridClasses}}">
        <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
        <div class="input-group date">
            <div class="input-group-addon">
                <i class="fa fa-calendar"></i>
            </div>
            <input ng-model="$ctrl.model" id="{{$ctrl.id}}" class="{{$ctrl.type}} form-control pull-right">
        </div>
    </div>
  `
});
