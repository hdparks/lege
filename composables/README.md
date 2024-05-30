The whole system boils down to RULES and FACTS (also called Components)

Our goal is to minimize FACTS to ensure we don't double-dip. For instance: 

- Is Han Solo proficient in Light Armor?

We could code in light armor proficiency as its own fact, which we hard-code in.
That would suck though as things get weirder and more rules get applied.
Instead, we strip it down to the BASE FACTS and apply RULES to determine more complicated facts.

- (FACT 1) Han is a level 6 Operator
- (RULE 1) Operators gain proficiency in Light Armor

THEREFORE
- (FACT 2) Han has proficiency in Light Armor


In practice, a RULE functions as a getter for a fact of an entity
