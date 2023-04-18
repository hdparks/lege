### A question on composition?

How do you store the idea that elves get +2 ancestry bonus to wisdom?
It obviously has to do with elven ancestry.
It obviously only affects entities that also have wisdom attribue.

### Data access pattern: Wisdom Saving throw

If Edgin needs to make a wisdom saving throw, we can enumerate everything that goes into that calculation

- He has a Wisdom Skill (and hence Wisdom Modifier)
- He might have arbitrary bonuses from any number of sources: class, ancestry, magic items, spells + effects, etc.

We can further assume some things about the sources of those bonuses

- Each one _knows_ they apply a wisdom bonus to Edgin.
- They have registered in some way with Edgin's wisdom modifier, so it knows to change and/or how to get in contact about updates.

This introduces a lil' bit of complexity. The build order here has to be specific, otherwise we could get some wonky behavior.
What if Edgin's entity gets the "Ancestry::Elven" component before the "WisdomModifier" component is added? The ancestry will look around for wisdom modifier, but it won't find it yet.

Alternatively, Edgin could have a separate "WisdomBonuses" object that is created if and when an external component registers a bonus.
WisdomModifier and WisdomBonuses can handle the wonky timing issue thing between them.
