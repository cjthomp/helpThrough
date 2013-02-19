helpThrough
===========

By CJ Thompson

A "step-through help" plugin

-------------------------------------------------------------------------------

Requires jQuery and Twitter.Bootstrap

1. Set the data-help attribute on each element and
2. Add the class "stepthrough" to each and
3. Then simply call .helpThrough() on your trigger object and voila!

-------------------------------------------------------------------------------

Example:

<input type="text" class="stepthrough" data-help="Informative text!">
<button id="startWalkover" class="btn">Help!</button>
<script>
$(document).ready(function(){
	$("button#startWalkover").helpThrough();
})
</script>

-------------------------------------------------------------------------------

Optional target element option: data-loc={left|right|top|bottom}
Defaults to "right"

-------------------------------------------------------------------------------

This plugin currently has no options.

-------------------------------------------------------------------------------

TODO:
- Add handling of options
- Allow ordering of fields
- .min