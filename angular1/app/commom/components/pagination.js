angular.module('primeiraApp').component('pagination', {
	bindings : {
		url: '@',
		pages: '@',
	},
	controller: ['$location', function ($location) {
		this.$onInit = function() {
			var pages = parseInt(this.pages) || 1;
			this.pagesArray = Array(pages).fill(0).map((e, i) => i + 1);
			this.current = parseInt($location.search().page) || 1;
			this.needPagination = this.pages > 1;
			this.hasPrev = this.current > 1;
			this.hasNext = this.current < this.pages;

			this.isCurrent = function(i) {
				return this.current == i
			}
		}
	}],
	template: `
 	<div class="col-md-6 pull-left" style="padding: 0">
		<div class="dataTables_paginate paging_simple_numbers" ng-if="$ctrl.needPagination">
		    <ul class="pagination" style="margin: 0;">
		
		        <li class="paginate_button active">
		            <a href="#" aria-controls="example2" data-dt-idx="1" tabindex="0">10</a>
		        </li>
		        <li class="paginate_button ">
		            <a href="#" aria-controls="example2" data-dt-idx="2" tabindex="0">25</a>
		        </li>
		        <li class="paginate_button ">
		            <a href="#" aria-controls="example2" data-dt-idx="3" tabindex="0">50</a>
		        </li>
		        <li class="paginate_button ">
		            <a href="#" aria-controls="example2" data-dt-idx="3" tabindex="0">100</a>
		        </li>
		
		    </ul>
		</div>
	</div>

    <div class="col-md-6 pull-right" style="padding: 0" ng-if="$ctrl.needPagination">
        <div class="dataTables_paginate paging_simple_numbers pull-right" id="example2_paginate">
            <ul class="pagination" style="margin: 0;">

                <li class="paginate_button previous disabled" id="example2_previous">
                    <a href="#" aria-controls="example2" data-dt-idx="0" tabindex="0">Previous</a>
                </li>

                <li class="paginate_button active">
                    <a href="#" aria-controls="example2" data-dt-idx="1" tabindex="0">1</a>
                </li>

                <li class="paginate_button ">
                    <a href="#" aria-controls="example2" data-dt-idx="2" tabindex="0">2</a>
                </li>

                <li class="paginate_button ">
                    <a href="#" aria-controls="example2" data-dt-idx="3" tabindex="0">3</a>
                </li>

                <li class="paginate_button next" id="example2_next">
                    <a href="#" aria-controls="example2" data-dt-idx="7" tabindex="0">Next</a>
                </li>

            </ul>
        </div>
    </div>
	
	`
});