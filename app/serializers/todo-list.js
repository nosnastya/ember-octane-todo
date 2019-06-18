import DS from 'ember-data';
import EmbeddedJSONapiRecordsMixin from '../mixins/embedded-jsonapi-records';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, EmbeddedJSONapiRecordsMixin, {
    // attrs: {
    //     tasks: {
    //         serialize: 'ids-and-type',
    //         deserialize: 'records',
    //         // embedded: 'always'
    //     },
    // }
});