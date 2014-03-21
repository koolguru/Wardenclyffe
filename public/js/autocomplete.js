//Assumes jQuery and typeahead are loaded

var acTags = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit:10,
    prefetch: {
        url: '/tags',
        filter: function(list) {
            return $.map(list, function(tag) { 
                return { name: tag }; 
            });
        }
    }
});

// kicks off the loading/processing of `local` and `prefetch`
acTags.initialize();

$(".autocomplete-tags").typeahead({
    hint:true,
    highlight:true,
    minLength:2
},
{
    name: 'tags',
    displayKey: 'name',
    source:acTags.ttAdapter()
});