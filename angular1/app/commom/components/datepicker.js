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

    controller: [
        'gridSystem', function(gridSystem) {
            this.$onInit = function (){
                this.gridClasses = gridSystem.toCssClasses(this.grid)
                this.type = this.type != undefined ? this.type : "datepicker";

	            $(".datepicker").datepicker({autoclose: true, format: 'dd/mm/yyyy'});

	            $(".datepicker-month").datepicker({
		            autoclose: true,
		            format: 'mm',
		            viewMode: "months",
		            minViewMode: "months"
	            });

	            $(".datepicker-year").datepicker({
		            autoclose: true,
		            format: 'yyyy',
		            viewMode: "years",
		            minViewMode: "years"
	            });

            }

		    // $(document).ready(function () {
			 //    $(".datepicker").datepicker({autoclose: true, format: 'dd/mm/yyyy'});
		    //
			 //    $(".datepicker-month").datepicker({
				//     autoclose: true,
				//     format: 'mm',
				//     viewMode: "months",
				//     minViewMode: "months"
			 //    });
		    //
			 //    $(".datepicker-year").datepicker({
				//     autoclose: true,
				//     format: 'yyyy',
				//     viewMode: "years",
				//     minViewMode: "years"
			 //    });
		    // });



        }
    ],

    template: `
    <div class="{{ $ctrl.gridClasses}}">
        <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
        <div class="input-group date">
            <div class="input-group-addon">
                <i class="fa fa-calendar"></i>
            </div>
            <input ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control pull-right {{$ctrl.type}}">
        </div>
    </div>
  `
});
