module.exports = {
    data    : function () {
        return {
            pagination: {
                currentPage   : 1,
                resultsPerPage: 15
            }
        };
    },
    methods : {
        gotoPage: function (pageNumber) {
            if (0 < pageNumber && pageNumber <= this.totalPages) {
                this.pagination.currentPage = pageNumber;
            }
        }
    },
    computed: {
        filteredItems: function () {
            console.log("[WARN]: You need to set up your filteredItems computed property.");
        },
        offset       : function () { return (this.pagination.currentPage - 1) * this.pagination.resultsPerPage; },
        totalPages   : function () { return Math.ceil(this.filteredItems.length / this.pagination.resultsPerPage); },
        prevPage     : function () { return this.pagination.currentPage - 1; },
        nextPage     : function () { return this.pagination.currentPage + 1; },
        pages        : function () {
            var i;
            var a = [];

            for (i = 0; i < this.totalPages; i++) {
                a.push(i + 1);
            }

            return a;
        }
    },
    components: {
        pagination: {
            template: require('./pagination-template.html')
        }
    }
};
