import { Injectable } from "@angular/core";
import IInfoMatrix from "../models/infoMatrix.model";

@Injectable({
    providedIn: 'root'
})

export class GlobalRefs {

    get allSpells() {
        let s =
        {
            death: [
                {
                    "primaryFactor": "Duration",
                    "cost": "",
                    "practice": "Compelling",
                    "reach": [
                        {
                            "effect": "The mage is able to cause even greater darkness, applying the Blinded Tilt to anyone within the spell’s area of effect for the Duration of the spell.",
                            "cost": 1
                        }
                    ],
                    "withstand": "",
                    "suggestedRotes": "Occult, Intimidation, Expression",
                    "dots": 1,
                    "name": "Deepen Shadows",
                    "description": "     The mage can influence the shadows in the spell’s area of effect, deepening darkness and making the area nearly completely pitch black. The area is affected by the Poor Light Environmental Tilt for the Duration of the spell.",
                    "arcanum": "Death"
                },
                {
                    "reach": [],
                    "primaryFactor": "Duration",
                    "description": "     The mage may shape and mold an ectoplasmic manifestation, either conjured by another mage or from a Materialized ghost, though the person or ghost that controls the ectoplasm may Withstand the shaping. After a successful casting, the mage shapes the ectoplasm into any shape he desires. The ectoplasm remains in the new shape for the Duration of the spell. He can use it to craft a mirror that reflects ghosts and other structures in ghostly Twilight in a given area.\n     Also, the mage can use the ectoplasm to create the Open Condition on an object or location for a ghost to Manifest through. Ghosts lose the Manifested Condition once the spell’s Duration ends.",
                    "practice": "Compelling",
                    "dots": 1,
                    "withstand": "Resolve",
                    "name": "Ectoplasmic Shaping",
                    "arcanum": "Death",
                    "suggestedRotes": "Crafts, Occult, Larceny",
                    "cost": ""
                },
                {
                    "reach": [
                        {
                            "effect": "The mage can witness the final moments of the corpse’s life just leading up to death as though seeing through the corpse’s eyes. Each rank of Potency reveals a minute of time prior to the corpse’s demise",
                            "cost": 1
                        }
                    ],
                    "name": "Forensic Gaze",
                    "primaryFactor": "Potency",
                    "practice": "Knowing",
                    "arcanum": "Death",
                    "description": "     The mage can determine the state of a corpse. She determines the exact method of its demise as well as exactly when it died. For each level of Potency, the mage reveals contributing factors to the cause of death. For example, a man found burned in a car might have died from asphyxiation, but might have gotten that way because he was unconscious due to a head wound from crashing his car into a tree while driving drunk.",
                    "cost": "",
                    "withstand": "",
                    "dots": 1,
                    "suggestedRotes": "Medicine, Investigation, Expression"
                },
                {
                    "primaryFactor": "Duration",
                    "arcanum": "Death",
                    "suggestedRotes": "Crafts, Science, Expression",
                    "reach": [
                        {
                            "effect": "The caster can both change the shape of the shadows as well as animate them. Shadows move and flow at the mage’s direction, at the same speed as the caster.",
                            "cost": 1
                        }
                    ],
                    "name": "Shadow Sculpting",
                    "practice": "Compelling",
                    "dots": 1,
                    "cost": "",
                    "withstand": "",
                    "description": "     The mage can mold and shape the shadows in the area of effect. He can shape the shadows into any likeness of his choosing. The area must have shadows present for the mage to shape them."
                },
                {
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "The mage can perform this spell on an unattached soul. Free of its host, a soul may also reveal if its former host had any Legacy Attainments at Gnosis 1–4"
                        }
                    ],
                    "description": "     The mage can determine the health of a person’s soul. She can determine one soul mark per Potency of the spell cast. She can discern the presence of Persistent Conditions, if the subject is Awakened, if the subject is a supernatural being, if the subject has created a soul stone (see “Soul Stones” p. 98), if the subject has had her soul tampered with, if the subject is Possessed, the presence of any Gnosis 5+ Legacy Attainments, if the subject has eaten or otherwise consumed another’s soul, or if the subject is suffering from a Paradox Condition.",
                    "primaryFactor": "Potency",
                    "withstand": "Resolve",
                    "practice": "Unveiling",
                    "name": "Soul Marks",
                    "dots": 1,
                    "suggestedRotes": "Medicine, Occult, Empathy",
                    "cost": "",
                    "arcanum": "Death"
                },
                {
                    "description": "     The mage is able to sense and communicate with ghosts within Twilight. She can sense all ghosts within the area of effect, and is capable of communicating with them by simply talking, as long as the ghost is capable of understanding a language she speaks. She may sense Anchors within the area without using Death Mage Sight. She can concentrate on a single ghost within 129 death the area and determine its Rank, if it has an Anchor, and how many Anchors it has.",
                    "suggestedRotes": "Socialize, Expression, Investigation",
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "The caster can determine if any of the Anchors she perceives are temporary (items in which the Anchor Condition has been placed temporarily through some kind of summoning) or permanent. +1 Reach: The caster can make herself understood by ghosts of Rank 2+ even if they do not speak the same language as her."
                        },
                        {
                            "cost": 1,
                            "effect": "The caster can make herself understood by ghosts of Rank 2+ even if they do not speak the same language as her."
                        }
                    ],
                    "arcanum": "Death",
                    "cost": "",
                    "dots": 1,
                    "primaryFactor": "Duration",
                    "withstand": "",
                    "practice": "Unveiling",
                    "name": "Speak with the Dead"
                },
                {
                    "suggestedRotes": "Subterfuge, Crafts, Medicine",
                    "arcanum": "Death",
                    "description": "     The mage alters the appearance of a body to make it look different even under scrutiny. She can cast the spell on a corpse, modifying its wounds and apparent time and cause of death completely. She can make a charred corpse look as though it instead died of a heart attack, or a person who died in a car crash look as though he is the victim of a stab wound.",
                    "dots": 2,
                    "practice": "Veiling",
                    "primaryFactor": "Duration",
                    "reach": [
                        {
                            "effect": "The mage may cast Corpse Mask on a living subject which has at least one Health box filled with damage to alter the appearance of his injuries, making stab wounds look like bruises, or abrasions look like third-degree burns.",
                            "cost": 1
                        },
                        {
                            "effect": "The mage may completely change a corpses’ appearance, even allowing her to change its apparent age and sex.",
                            "cost": 1
                        }
                    ],
                    "cost": "",
                    "name": "Corpse Mask",
                    "withstand": ""
                },
                {
                    "description": "     The mage degrades a material object, causing it to age in a matter of moments. The object’s Durability is lowered by –1 for each Potency of the spell’s casting.",
                    "withstand": "",
                    "suggestedRotes": "Subterfuge, Science, Occult",
                    "arcanum": "Death",
                    "name": "Decay",
                    "cost": "",
                    "primaryFactor": "Potency",
                    "reach": [
                        {
                            "effect": "The mage can decrease the object’s Structure for each point of Potency, possibly destroying the object outright.",
                            "cost": 1
                        }
                    ],
                    "dots": 2,
                    "practice": "Ruling"
                },
                {
                    "arcanum": "Death",
                    "withstand": "",
                    "primaryFactor": "Duration",
                    "suggestedRotes": "Occult, Expression, Academics",
                    "practice": "Ruling",
                    "cost": "",
                    "dots": 2,
                    "description": "     The mage can create ectoplasm (see Ectoplasmic Shaping, above) from one of his own orifices, or the orifice of a corpse — normally the nose or mouth, but sometimes the tear ducts or ears. The mage can shape the ectoplasm into any shape he wishes. The ectoplasm retains its shape for the Duration of the spell.",
                    "name": "Ectoplasm",
                    "reach": []
                },
                {
                    "practice": "Shielding",
                    "dots": 2,
                    "arcanum": "Death",
                    "description": "     The caster creates a shield that protects her subject from ghostly Numina, Influences, Manifestations, Death spells, and any death-related powers of other supernatural creatures. Any power attempting to pierce the shield provokes a Clash of Wills roll.",
                    "withstand": "",
                    "reach": [
                        {
                            "effect": "The protection afforded by this spell extends to ghosts’ physical attacks.",
                            "cost": 1
                        }
                    ],
                    "cost": "",
                    "suggestedRotes": "Streetwise, Subterfuge, Survival",
                    "name": "Ghost Shield",
                    "primaryFactor": "Potency"
                },
                {
                    "practice": "Ruling",
                    "description": "     The caster may reshape Death-attuned ephemera from one object into a new object entirely. This ephemera can be from a ghost or other entity in Twilight, but they have the ability to Withstand the spell, and being reshaped does not damage the entity’s Corpus. \n     The object gains a Durability of 2. If it is a weapon it gains a weapon rating of 2; if it is armor it gains an armor rating of 2. Objects made of ephemera are only useful against other objects or beings made of ephemera or within Twilight. Objects made this way can be used by any ephemeral entity in Twilight, including ghosts or a mage who has transformed himself into ephemera (See “Ghost Gate” p. 130).",
                    "withstand": "Stamina",
                    "arcanum": "Death",
                    "suggestedRotes": "Crafts, Expression, Science",
                    "dots": 2,
                    "cost": "",
                    "primaryFactor": "Duration",
                    "name": "Shape Ephemera",
                    "reach": []
                },
                {
                    "name": "Soul Armor",
                    "cost": "",
                    "primaryFactor": "Duration",
                    "suggestedRotes": "Academics, Occult, Survival",
                    "description": "     This spell armors the subject’s soul against all who would profane it. Any spell or effect that would remove, manipulate, or injure the subject’s soul must first win a Clash of Wills",
                    "arcanum": "Death",
                    "reach": [],
                    "dots": 2,
                    "practice": "Shielding",
                    "withstand": ""
                },
                {
                    "withstand": "Resolve",
                    "practice": "Ruling",
                    "dots": 2,
                    "cost": "",
                    "name": "Soul Jar",
                    "arcanum": "Death",
                    "suggestedRotes": "Crafts, Occult, Persuasion",
                    "description": "     The mage creates a receptacle for a displaced soul. The soul jar can be anything designed to hold and seal a liquid, from a paint can to a water bottle. A soul placed into the soul jar cannot escape and is protected from outside attack. If the jar is opened or broken before the Duration of the spell ends, the soul is released.",
                    "reach": [
                        {
                            "effect": "The mage may bind the soul to herself or to another person. To bind the soul to a person, the recipient must be suffering from the Soulless, Enervated, or Thrall Condition. Once the soul is in the body, it becomes the person’s soul for the Duration of the spell. An unwilling person Withstands the spell’s effect.",
                            "cost": 1
                        },
                        {
                            "effect": "By spending a point of Mana, the effects of this spell are Lasting, and the soul remains bound or attached even when the Duration ends",
                            "cost": 2
                        }
                    ],
                    "primaryFactor": "Duration"
                },
                {
                    "cost": "",
                    "withstand": "Resolve",
                    "description": "     The mage suppresses the personal aura of her subject. The subject’s Nimbus disappears and magical resonances around her are dampened, including the resonances of spells currently affecting her. She appears as a Sleeper to Mage Sight. She is harder to read in general, imposing a –2 penalty on Empathy checks, and supernatural attempts to discern her emotional or mental state. Magical attempts to see through the disguise provoke a Clash of Wills.",
                    "primaryFactor": "Duration",
                    "practice": "Veiling",
                    "arcanum": "Death",
                    "name": "Suppress Aura",
                    "suggestedRotes": "Subterfuge, Intimidation, Medicine",
                    "reach": [],
                    "dots": 2
                },
                {
                    "arcanum": "Death",
                    "practice": "Veiling",
                    "primaryFactor": "Duration",
                    "description": "     The mage can suppress the subject’s life signs; the subject appears for all intents and purposes as though she is dead. All physical symptoms of death appear to set in and the soul appears absent from the body to magical senses.",
                    "reach": [
                        {
                            "effect": "By spending a point of Mana, the mage may cast the spell reflexively in response to something that would reasonably cause the subject’s death.",
                            "cost": 2
                        }
                    ],
                    "withstand": "",
                    "name": "Suppress Life",
                    "cost": "",
                    "suggestedRotes": "Subterfuge, Medicine, Academics",
                    "dots": 2
                },
                {
                    "primaryFactor": "Duration",
                    "name": "Touch of the Grave",
                    "cost": "",
                    "suggestedRotes": "Survival, Crafts, Persuasion",
                    "description": "     The mage can physically interact with ghosts and other things in Death-attuned Twilight. She can “pull” items from Twilight, making them visible and solid; these items have a Durability of 1 and dissipate into ephemera if broken, or after the spell’s Duration ends. Items pulled from Twilight function as their material counterparts bestowing the same equipment bonuses.",
                    "arcanum": "Death",
                    "withstand": "",
                    "practice": "Ruling",
                    "reach": [],
                    "dots": 2
                },
                {
                    "arcanum": "Death",
                    "name": "Without a Trace",
                    "dots": 2,
                    "reach": [],
                    "description": "     People constantly shed dead skin, hair, and other small evidences of themselves as they pass through the world. The mage conceals all physical evidence from casual observation. For the Duration of the spell, the subject leaves no fingerprints, footprints, traces of blood, or any other forensic type evidence of herself behind. Using Death Mage Sight to search for such signs provokes a Clash of Wills",
                    "withstand": "",
                    "primaryFactor": "Duration",
                    "suggestedRotes": "Science, Stealth, Subterfuge",
                    "cost": "",
                    "practice": "Veiling"
                },
                {
                    "arcanum": "Death",
                    "cost": "",
                    "primaryFactor": "Duration",
                    "practice": "Weaving",
                    "suggestedRotes": "Survival, Intimidation, Science",
                    "dots": 3,
                    "reach": [
                        {
                            "effect": "The cold of the area is so terrible and biting that in addition to the Ice Tilt, the area is under the effects of the Extreme Cold Tilt (p. 320).",
                            "cost": 1
                        }
                    ],
                    "withstand": "",
                    "name": "Cold Snap",
                    "description": "     The mage dissipates the heat in the spell’s area of effect, causing frost and ice to form on the floor and exposed surfaces. For the Duration of the spell, all surfaces in the area are under the effects of the Ice Tilt (p. 321)."
                },
                {
                    "name": "Damage Ghost",
                    "practice": "Fraying",
                    "reach": [],
                    "cost": "",
                    "suggestedRotes": "Occult, Intimidation, Brawl",
                    "description": "     The mage can cause pain to a ghost. She deals one bashing wound to the ghost’s Corpus per Potency of the spell.",
                    "dots": 3,
                    "primaryFactor": "Potency",
                    "withstand": "",
                    "arcanum": "Death"
                },
                {
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "The mage may affect a healthy subject with this spell instead of one who has recently taken damage."
                        },
                        {
                            "effect": "The spell does not count toward the limit of times per day a mage can gain Mana through Scouring.",
                            "cost": 1
                        },
                        {
                            "effect": "The mage may affect a ghost with this spell, damaging its Corpus to gain either Willpower or Mana on a one for one basis. The age must choose when casting the spell to take either Willpower or Mana, and cannot take a mix of the two from the ghost.",
                            "cost": 1
                        }
                    ],
                    "primaryFactor": "Potency",
                    "practice": "Fraying",
                    "arcanum": "Death",
                    "dots": 3,
                    "withstand": "Resolve",
                    "description": "     The mage may pull the energy from his subject’s suffering into himself. The mage chooses at the time of casting to either harvest Willpower or to scourge the subject’s Pattern for Mana. The subject must have at least one Health box filled with either lethal or aggravated damage. For each level of Potency, the mage may take one point of Willpower (up to the subject’s remaining Willpower points), or he may Scour the subject’s Pattern for one point of Mana, dealing one lethal damage in the process, causing existing wounds to open and fester. Using this spell counts towards the limit of times per day a mage can gain Mana through Scouring.",
                    "cost": "",
                    "suggestedRotes": "Intimidation, Medicine, Persuasion",
                    "name": "Devouring the Slain"
                },
                {
                    "name": "Ghost Gate",
                    "cost": "",
                    "description": "     The mage creates a two-dimensional plane that acts as a gateway, converting anything that moves through it into Twilight. While in Twilight, the person can interact with and see Death-attuned ephemeral objects and beings. Items can be carried through the gate, but doing so destroys their material forms, though they may be retrieved later with “Touch of the Grave.”",
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "The mage is able to transform her subject into the Twilight state without the use of the gate. All of her clothes and personal possessions turn into ephemera as she makes the transition."
                        }
                    ],
                    "dots": 3,
                    "practice": "Weaving",
                    "suggestedRotes": "Occult, Academics, Expression",
                    "arcanum": "Death",
                    "primaryFactor": "Duration",
                    "withstand": ""
                },
                {
                    "reach": [
                        {
                            "effect": "1 Reach:  +1 Reach:  +1 Reach:  +2 Reach: ",
                            "cost": 1
                        },
                        {
                            "effect": "The spell also creates the Open Condition on the area, even if the ghost’s Anchor is not within the immediate vicinity, and the ghost Manifests as part of responding to the summons.",
                            "cost": 1
                        },
                        {
                            "effect": "The mage may give the ghost a single, one-word command to follow. The ghost is not compelled to complete a task if it cannot finish the command before the Duration of the spell elapses.",
                            "cost": 1
                        },
                        {
                            "effect": "In the vicinity of an open Iris to the Underworld (p. 243), the mage can summon ghosts from the Underworld vicinity of that Iris.",
                            "cost": 1
                        },
                        {
                            "cost": 2,
                            "effect": "The mage may give the ghost a complex command to follow. The command must be a single task, but the mage can describe the task within a sentence or two."
                        }
                    ],
                    "withstand": "Rank",
                    "primaryFactor": "Duration",
                    "description": "     The mage sends out a call to the nearest ghost within her sensory range. Alternately, she can summon ghosts she knows personally. She may send a general call and the nearest ghost will answer, or she can specify the type of ghost, such as a child or a female. The ghost cannot travel farther than allowed by its Anchor. The spell does not work on ghosts above Rank 5.",
                    "name": "Ghost Summons",
                    "practice": "Perfecting",
                    "suggestedRotes": "Persuasion, Socialize, Occult",
                    "dots": 3,
                    "cost": "",
                    "arcanum": "Death"
                },
                {
                    "dots": 3,
                    "suggestedRotes": "Medicine, Crafts, Persuasion",
                    "primaryFactor": "Duration",
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "1 Reach: The mage may create a zombie suitable for combat. It uses its dot-rating as a dice pool for attacks, and has a Defense 3, Initiative 1, and Speed 6."
                        },
                        {
                            "effect": "The mage may spend a point of Mana to imbue the zombie with exceptional physical prowess. zombie has Defense 5, Initiative 3, and Speed 8.",
                            "cost": 2
                        }
                    ],
                    "practice": "Weaving",
                    "arcanum": "Death",
                    "cost": "",
                    "name": "Quicken Corpse",
                    "description": "     The caster can animate a corpse, creating a loyal zombie servant. A zombie has limited mental capacity, and can understand simple one- or two-word commands and nothing more. It is a mindless, soulless construct immune to fear, pain, exhaustion, intimidation, or coercion, and follows the creator’s orders with no regard to self. The corpse’s physical capabilities are impaired, making them slow and clumsy compared to a living person. The constructs are not suited for combat (and have no Defense), but count as Retainers worth dots equal to the spell’s Potency with a “field” relating to the mage’s commands. Zombies have as much Health as the living creature their corpse came from had, but suffer damage as though they are under the effects of Death Mage Armor. They do not fall unconscious through damage, or bleed when filled with lethal damage, and are only destroyed when their last Health box is filled with aggravated damage.",
                    "withstand": ""
                },
                {
                    "reach": [
                        {
                            "cost": 2,
                            "effect": "The mage may spend one Mana to increase the ghost’s Rank by 1, increasing its maximum Attribute levels and Essence pool, as well as awarding it one new Numen."
                        }
                    ],
                    "practice": "Perfecting",
                    "dots": 3,
                    "cost": "One Mana (Optional)",
                    "suggestedRotes": "Persuasion, Socialize, Medicine",
                    "name": "Quicken Ghost",
                    "primaryFactor": "Potency",
                    "arcanum": "Death",
                    "withstand": "",
                    "description": "     The mage bolsters a ghost, making low-Ranked ghosts more powerful and aware than they once were. Each level of Potency raises one of the ghost’s three Attributes by one, not to exceed its Rank maximum. The mage can instead use the spell to heal a ghost’s Corpus at a rate of one point per Potency of the spell."
                },
                {
                    "description": "     The mage’s touch rots away at her subject, causing his flesh and bones to wither and decay. Each level of Potency deals one point of bashing damage to the subject.",
                    "suggestedRotes": "Intimidation, Occult, Empathy",
                    "name": "Rotting Flesh",
                    "primaryFactor": "Potency",
                    "withstand": "",
                    "cost": "",
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "In addition, the subject suffers a –1 penalty to Social rolls for the Duration of the spell for each level of Potency of the spell (with a maximum penalty of –3) due to his horrific appearance."
                        }
                    ],
                    "dots": 3,
                    "practice": "Perfecting",
                    "arcanum": "Death"
                },
                {
                    "practice": "Fraying",
                    "suggestedRotes": "Intimidation, Athletics, Expression",
                    "description": "     The mage rips the soul from a Sleeper, casting it into Twilight. While without a soul, the subject suffers from the Soulless Condition (p. 318). When the spell’s Duration ends, the Sleeper’s soul returns to him, unless otherwise prevented from escape, such as the case of being trapped in a soul jar or inside another body (see “Soul Jar” p. 129). If this spell is cast on a subject who is already under the effects of the Soulless Condition, he is stepped up to the Enervated Condition (p. 315) — though the mage does not gain immediate access to his soul, since it is already missing.",
                    "withstand": "Resolve",
                    "arcanum": "Death",
                    "name": "Sever Soul",
                    "reach": [
                        {
                            "effect": "The subject’s soul leaves his body and enters Twilight, but he is instead under the effects of the Enervated Condition immediately, skipping the Soulless Condition. With an additional Reach, the subject can be placed under the effects of the Thrall Condition (p. 318).",
                            "cost": 1
                        }
                    ],
                    "primaryFactor": "Potency",
                    "cost": "",
                    "dots": 3
                },
                {
                    "withstand": "",
                    "name": "Shadow Crafting",
                    "primaryFactor": "Duration",
                    "arcanum": "Death",
                    "dots": 3,
                    "cost": "",
                    "description": "     The caster can shape and harden shadows into solid, three-dimensional forms. The object gains a Durability of 2. If it is a weapon it gains a weapon rating of 2; if it is armor it gains an armor rating of 2; otherwise the object gains a +2 equipment bonus. Objects made of shadow retain a shadowy appearance and cast no shadow of their own.",
                    "reach": [],
                    "suggestedRotes": "Academics, Intimidation, Occult",
                    "practice": "Weaving"
                },
                {
                    "withstand": "Stamina",
                    "practice": "Unraveling",
                    "cost": "",
                    "primaryFactor": "Potency",
                    "reach": [
                        {
                            "effect": "The mage causes the subject’s entire body to seize up. For the Duration of the spell, the subject suffers from the Immobilized Tilt.",
                            "cost": 1
                        }
                    ],
                    "dots": 4,
                    "description": "     The mage causes her subject’s muscles to stop working, breaking down connections between muscles, ligaments, and tendons. The spell imposes either the Leg Wrack Tilt or the Arm Wrack Tilt on the subject while the spell remains active.",
                    "arcanum": "Death",
                    "suggestedRotes": "Occult, Intimidation, Subterfuge",
                    "name": "Enervation"
                },
                {
                    "suggestedRotes": "Brawl, Expression, Occult",
                    "reach": [
                        {
                            "effect": "The target cannot attempt to recreate the destroyed Conditions on the same victim or location until the spell’s Duration elapses.",
                            "cost": 1
                        }
                    ],
                    "withstand": "Rank",
                    "dots": 4,
                    "description": "     This spell rips a ghost’s grip on the world away. This spell strips a number of Manifestation Conditions from the ghost (or its host) equal to the spell’s Potency. The effect is Lasting, but the spirit may use its Influences and Manifestations to reestablish the Conditions as normal. \n     Add Mind 4 or Spirit 4: The spell’s effects extend to Goetia or Spirits.",
                    "arcanum": "Death",
                    "practice": "Unraveling",
                    "name": "Exorcism",
                    "cost": "",
                    "primaryFactor": "Potency"
                },
                {
                    "withstand": "Rank",
                    "name": "Revenant",
                    "practice": "Patterning",
                    "primaryFactor": "Duration",
                    "dots": 4,
                    "description": "     The mage may grant a ghost a Manifestation Condition (see p. 258). The mage may grant a number of Conditions equal to the spell’s Potency, and must create any prerequisite Conditions as well, if they aren’t already present. The entity immediately enters the Manifestation of the mage’s choice, and may not leave it while the spell remains in effect. Mages often use this spell to allow ghosts to Possess their own corpses, creating undead beings called revenants. \n     Add Mind 4 or Spirit 4: The spell’s effects extend to Goetia or Spirits.",
                    "cost": "",
                    "arcanum": "Death",
                    "suggestedRotes": "Crafts, Brawl, Intimidation",
                    "reach": []
                },
                {
                    "primaryFactor": "Duration",
                    "name": "Shadow Flesh",
                    "withstand": "Stamina",
                    "practice": "Patterning",
                    "arcanum": "Death",
                    "cost": "",
                    "suggestedRotes": "Occult, Medicine, Subterfuge",
                    "reach": [],
                    "dots": 4,
                    "description": "     The mage transforms the subject’s body and all her personal possessions into a mass of moving and animated shadows. The mage may choose to make the subject a three-dimensional or a two-dimensional shadow. Three-dimensional shadows still have no apparent mass or substance, and cannot interact with physical objects. Two-dimensional shadows may move through cracks and crevices, though are still bound by the laws of gravity and must remain touching the floor, even if moving on walls. \n     The subject retains all of her Attributes and Skills, but may not take physical actions other than to move, though she can still cast spells. She is immune to attacks or damage, but not Supernal magic, while in her shadowy form. She is effectively invisible in natural or supernatural darkness, though she can see in them herself."
                },
                {
                    "withstand": "",
                    "description": "     The mage causes the subject’s body to wither and atrophy within moments, dealing one point of lethal damage per level of Potency of the spell.",
                    "primaryFactor": "Potency",
                    "practice": "Unraveling",
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "By spending one Mana, the mage can instead inflict aggravated damage on her subject."
                        }
                    ],
                    "name": "Withering",
                    "cost": "",
                    "suggestedRotes": "Intimidation, Medicine, Science",
                    "arcanum": "Death",
                    "dots": 4
                },
                {
                    "withstand": "Resolve",
                    "reach": [],
                    "practice": "Making",
                    "suggestedRotes": "Crafts, Occult, Persuasion",
                    "primaryFactor": "Duration",
                    "description": "     The mage applies a universally-applicable version of the Anchor Condition to a subject, usable by any ghosts. If the mage also has a ghost as an additional subject, that ghost becomes anchored to the new Anchor as well as its own.",
                    "name": "Create Anchor",
                    "dots": 5,
                    "cost": "",
                    "arcanum": "Death"
                },
                {
                    "withstand": "",
                    "primaryFactor": "Duration",
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "The mage can create an Iris leading to anywhere she has been before in the Underworld."
                        }
                    ],
                    "cost": "",
                    "name": "Create Avernian Gate",
                    "description": "     The mage rips open the material world to the Underworld, creating an Iris between the material world and the upper layers of the Underworld within the area of effect. Opening the gate causes the area to gain a Death Resonance and the Gateway Condition for the Duration of the spell.",
                    "suggestedRotes": "Occult, Crafts, Persuasion",
                    "practice": "Making",
                    "dots": 5,
                    "arcanum": "Death"
                },
                {
                    "practice": "Making",
                    "primaryFactor": "Duration",
                    "arcanum": "Death",
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "For one Mana, the ghost created is Rank 2."
                        }
                    ],
                    "dots": 5,
                    "name": "Create Ghost",
                    "cost": "",
                    "suggestedRotes": "Occult, Expression, Academics",
                    "description": "     The mage creates a ghost within Twilight. She can fashion the ghost as an echo of another person, either alive or dead, though the ghost is not the actual person. The ghost is created at Rank 1 and remains for the Duration of the spell as the mage’s loyal servant, and she is able to direct it to take actions without the use of any additional spells.",
                    "withstand": ""
                },
                {
                    "dots": 5,
                    "primaryFactor": "Potency",
                    "name": "Deny the Reaper",
                    "practice": "Unmaking",
                    "arcanum": "Death",
                    "reach": [
                        {
                            "effect": "The mage may return the recently dead to life. No matter how long the subject has been dead, minutes or hours, the person’s soul has already moved on, and the subject immediately suffers soul loss. When the spell’s Duration ends, the subject dies again.",
                            "cost": 1
                        }
                    ],
                    "cost": "",
                    "description": "     The mage is able to reverse the effects of entropy on her subject, even returning the dead back to life. The mage reverses the effects of decay, restoring the subject to its physical state of being from before up to one month per Potency of the spell. On a living subject, the spell can restore eyesight, the use of limbs, reversing irreparable damage, and restoring all bodily functions. On inanimate subjects the spell can restore time-ravaged photos, make old books pristine, or return old electronics to working order.",
                    "suggestedRotes": "Medicine, Occult, Subterfuge",
                    "withstand": ""
                },
                {
                    "suggestedRotes": "Subterfuge, Persuasion, Stealth",
                    "primaryFactor": "Duration",
                    "dots": 5,
                    "name": "Empty Presence",
                    "cost": "One Mana",
                    "reach": [],
                    "description": "     The mage destroys the subject’s presence in the world, removing any evidence of her life or existence. Any attempts to see the subject through mundane means of detection or observation fail completely. Not only is she invisible to the naked eye, but evidence of her life is scrubbed. All Doors she may have opened during social interactions with others, either on herself or on the other person, are removed. All her Conditions, and all Conditions applying to her (except for Paradox Conditions), resolve without granting Beats. While invisible, the subject cannot make violent, overt actions without breaking the spell’s illusion. Physically damaging or breaking objects, or attacking someone, causes the spell to end immediately. \n     Mages using Active Mage Sight make a Clash of Wills test against the subject, and the use of Focused Mage Sight reveals her to the mage using it. Conditions do not return when the spell ends, but Doors return to their previous states.",
                    "withstand": "Composure",
                    "practice": "Unmaking",
                    "arcanum": "Death"
                },
                {
                    "practice": "Unmaking",
                    "name": "Sever the Awakened Soul",
                    "primaryFactor": "Potency",
                    "description": "     The soul of a mage cannot be removed with Fraying alone; Awakened Gnosis holds it tight, requiring mastery to prise lose. This spell Unmakes the protective metaphysical layers of a mage’s soul, ripping it free and placing it into a container. That container can either be a specially prepared vessel such as one created with “Soul Jar,” or the caster can take the soul into her own body. While without a soul, the subject suffers from the Soulless Condition. If this spell is cast on a subject who is already under the effects of the Soulless Condition, he is stepped up to the Enervated Condition — though the mage does not gain immediate access to his soul, since it is already missing.\n     If the mage chooses not to capture her subject’s soul immediately, it goes into Twilight where it waits to return to its owner.",
                    "dots": 5,
                    "arcanum": "Death",
                    "cost": "",
                    "withstand": "Resolve",
                    "suggestedRotes": "Crafts, Intimidation, Medicine",
                    "reach": [
                        {
                            "cost": 1,
                            "effect": "The subject falls immediately under the effects of the Enervated Condition. With an additional Reach, the subject can be placed under the effects of the Thrall Condition."
                        }
                    ]
                }]
            ,
            fate: [{
                "dots": 1,
                "practice": "Unveiling",
                "primaryFactor": "Potency",
                "description": "     This spell reveals the marks of Fate on people, places, and things the mage observes (up to one subject per turn). In addition to allowing the mage to detect any sympathetic connections between the subjects, the mage can also identify those who have violated a magical oath, and the presence of spells with conditional Durations (see p. 192).",
                "arcanum": "Fate",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage can also detect possession, supernatural mind control, and alterations of destiny."
                    },
                    {
                        "cost": 2,
                        "effect": "The mage can also discern specific information about a subject’s destiny — such as the Doom of a subject with the Destiny Merit or the the parameters of a conditional Duration."
                    }
                ],
                "cost": "",
                "name": "Interconnections",
                "withstand": "Composure",
                "suggestedRotes": "Empathy, Investigation, Medicine"
            },
            {
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "effect": "The mage receives a brief vision of the subject when the oath is fulfilled.",
                        "cost": 1
                    },
                    {
                        "effect": "The mage can track the subject until the spell’s Duration elapses. This doesn’t provide knowledge of the subject’s location, only of a path to the subject that is sure and swift.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The trigger event may be something the mage could only perceive using Mage Sight."
                    }
                ],
                "arcanum": "Fate",
                "dots": 1,
                "withstand": "",
                "description": "     In folktales, witches always seem to know when their subjects fulfill (or violate) the terms of an agreement. This spell notifies the mage when a specified fate befalls its subject — whether the subject is the victim or the actor. This triggering event must be something the mage could perceive if he were present (e.g. the subject suffers an injury, goes to the restroom, breaks her word, speaks the mage’s name, etc.).",
                "name": "Oaths Fulfilled",
                "practice": "Knowing",
                "cost": "",
                "suggestedRotes": "Occult, Politics, Investigation"
            },
            {
                "reach": [],
                "primaryFactor": "Duration",
                "practice": "Compelling",
                "suggestedRotes": "Crafts, Firearms, Occult",
                "dots": 1,
                "name": "Quantum Flux",
                "arcanum": "Fate",
                "cost": "",
                "description": "     The mage reads probability and compensates for deleterious factors, attracting small turns of good fortune to negate unfortunate obstacles that stand in her way. This negates penalties to any of the subject’s actions equal to Potency for a number of actions during the Duration equal to Potency.\n     Additionally, the subject can spend a turn during the spell’s Duration aiming an action. The subject loses any Defense and must remain still while aiming. A turn spent aiming grants a bonus to the next action equal to Potency. \n     These effects can only be applied to mundane instant actions; extended actions and spellcasting rolls do not benefit",
                "withstand": ""
            },
            {
                "name": "Reading the Outmost Eddies",
                "dots": 1,
                "practice": "Compelling",
                "description": "      bad fortune to its subject. As long as the spell remains active the subject experiences an event within the next 24 hours, such as finding $20 or dropping his wallet in a puddle. The mage can exert limited control over the nature of the fortune (or misfortune), but ultimately fate decides the detail Hostile applications of this spell are Withstood by Composure.",
                "reach": [
                    {
                        "effect": "The twist of fate occurs within one hour.",
                        "cost": 1
                    }
                ],
                "arcanum": "Fate",
                "primaryFactor": "Potency",
                "withstand": "Composure",
                "suggestedRotes": "Computer, Persuasion, Subterfuge",
                "cost": ""
            },
            {
                "name": "Serendipity",
                "cost": "",
                "arcanum": "Fate",
                "withstand": "",
                "dots": 1,
                "suggestedRotes": "Academics, Crafts, Survival",
                "reach": [
                    {
                        "effect": "When the mage’s player makes a roll to achieve her stated goal she may substitute any Skill of the same type (Mental, Physical, or Social) as the one that the task calls for. Through some twist of fate Streetwise turns out to be just as useful in a specific social situation as Empathy, for example. This affects a number of rolls no greater than the Potency of the spell.",
                        "cost": 1
                    },
                    {
                        "cost": 2,
                        "effect": "As above, but the mage’s player may substitute any Skill. The mage’s street sense (Streetwise) so impresses a punkat-heart librarian that she helpfully answers all his questions about Greek history (Academics), for example."
                    }
                ],
                "primaryFactor": "Potency",
                "description": "     This spell grants the mage a momentary glimpse of all the potential roads her destiny may follow to her desired destination, which allows the mage to identify the next step she must take to accomplish a stated objective. Upon casting, the mage receives a clear omen that suggests a course of action that will lead her closer to her goal. This seldom guarantees immediate success, especially if the task before her is complicated, but can provide an important breakthrough.",
                "practice": "Knowing"
            },
            {
                "cost": "",
                "practice": "Ruling",
                "primaryFactor": "Potency",
                "withstand": "Composure",
                "suggestedRotes": "Intimidation, Occult, Socialize",
                "description": "     The mage blesses the subject’s endeavors or curses them with misfortune. Whether good or bad, the subject’s luck is truly exceptional. This spell bestows a boon or inflicts a hex on the subject (see p. 134). The subject may Withstand a hex with Composure.",
                "dots": 2,
                "name": "Exceptional Luck",
                "reach": [
                    {
                        "cost": 2,
                        "effect": "The boon or hex can affect spellcasting rolls."
                    },
                    {
                        "effect": "Spend a point of Mana. The mage can cast this spell as a reflexive action.",
                        "cost": 2
                    }
                ],
                "arcanum": "Fate"
            },
            {
                "primaryFactor": "Duration",
                "name": "Fabricate Fortune",
                "practice": "Veiling",
                "arcanum": "Fate",
                "cost": "",
                "description": "     Sometimes a mage wishes to hide a child of destiny from those who would abuse her gift. Other times he wishes to convince observers that a subject has a fate that she does not. This spell conceals or falsifies fates and Destiny. \n     It can be used to “trick” conditional Durations or spells with conditional triggers into ignoring an event that meets the defined condition or into acting as though the stipulated event has come to pass. It can create false omens regarding the subject when she is scrutinized by Fate magic. All such deceptions provoke a Clash of Wills against those attempting to overcome its protections",
                "dots": 2,
                "suggestedRotes": "Larceny, Occult, Subterfuge",
                "withstand": "",
                "reach": []
            },
            {
                "arcanum": "Fate",
                "primaryFactor": "Duration",
                "suggestedRotes": "Athletics, Socialize, Streetwise",
                "name": "Fools Rush In",
                "dots": 2,
                "description": "     According to old wisdom Fate favors children and fools, and this spell makes the old adage true. So long as the subject has little or no detailed knowledge about a situation before he enters it, the spell allows him to act with perfect grace and timing. A turn or two of studying the scene before acting is acceptable, but extensive reconnaissance or a detailed briefing does not permit the necessary degree of randomness this spell requires.\n     The subject does not suffer untrained penalties during the spell’s Duration. If entering an unfamiliar social situation, the subject’s impression level also improves by one.",
                "cost": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject receives a dice bonus equal to Potency on a number of dice rolls (not including spellcasting rolls) equal to Potency during the Duration. The subject’s player chooses which rolls are affected (before the dice are rolled), and they can include any action or task, so long as they are instant or reflexive actions taken “in the moment” and not arranged ahead of time."
                    },
                    {
                        "cost": 3,
                        "effect": "As the first Reach effect, but this bonus can also affect spellcasting rolls."
                    }
                ],
                "practice": "Ruling",
                "withstand": ""
            },
            {
                "reach": [],
                "withstand": "",
                "practice": "Ruling",
                "arcanum": "Fate",
                "name": "Lucky Number",
                "primaryFactor": "Duration",
                "dots": 2,
                "suggestedRotes": "Investigation, Larceny, Science",
                "cost": "",
                "description": "     The probability of correctly guessing a phone number, a password, or lock combination on the first try is minute but not impossible. This spell allows the mage to do just that simply by entering data into an appropriate device (a password field, a telephone, a safe combination, etc.). In addition to any story benefits, the mage gains the Informed Condition on next relevant roll that benefits from knowledge gained through this spell. \n     This spell uses the input device as its subject, and the mage concentrates on what she is attempting to accomplish. It does not require sympathy even for applications such as guessing the phone number for a particular person; the magic applies to the probabilities of random input, rather than locating a target. Although it will call the nearest available phone to the person the mage is trying to reach, the spell doesn’t tell the caster where that phone is."
            },
            {
                "withstand": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage locates the desired object within one hour."
                    }
                ],
                "arcanum": "Fate",
                "description": "     An Apprentice of Fate always has access to what she needs at the moment. The mage focuses on locating a particular kind of person, place, or thing, and this spell directs her steps to it unerringly as soon as possible within the next 24 hours as long as the spell remains active. Casting the spell looking for a kind of person in a crowd or an item anywhere it could appear is usually enough to immediately succeed.\n     The spell can find someone with a specific Trait, occupation, or context-specific quality (e.g. “corrupt cop”), but it only locates the nearest or most available subject matching the description the mage provides, never a specific person or object (although destiny sometimes draws familiar faces together).\n     Alternatively, the mage gains temporary access to certain Social Merits (Ally, Contacts, Mentor, Resources, or Retainer) with a rating no greater than Potency. Fate guides her to dropped cash, unattended mundane items, or useful strangers she can easily convince to do her a quick favor. The mage may benefit from this Merit a number of times no greater than Potency, after which the money runs out or the ally of convenience goes his own way unless the mage’s character spends Experiences to purchase the Merit.",
                "practice": "Ruling",
                "suggestedRotes": "Investigation, Politics, Subterfuge",
                "name": "Shifting the Odds",
                "cost": "",
                "dots": 2,
                "primaryFactor": "Duration"
            },
            {
                "suggestedRotes": "Brawl, Occult, Subterfuge",
                "name": "Warding Gesture",
                "dots": 2,
                "reach": [
                    {
                        "effect": "The mage can selectively exclude the subject from any spell she casts or any Attainment she uses.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The mage may selectively grant protection from supernatural effects that target an area instead of individuals. This provokes a Clash of Wills to exclude the subject from the 137 fate effect, which the mage may automatically pass if protecting subjects from his own spells."
                    }
                ],
                "practice": "Shielding",
                "description": "     The mage creates a ward protecting the subject against supernatural effects that manipulate her fate — a geas, a supernatural compulsion to act against her will, or having her fate manipulated by Fate magic or similar supernatural effects. Each attempt to change the subject’s destiny provokes a Clash of Wills with the mage. This spell has no effect on pre-existing alterations to the subject’s destiny. \n     Additionally, the mage may selectively exclude the subject from any area-effect spell he casts. If cast on multiple subjects, this spell allows the mage to exclude each valid subject on a case-by-case basis.",
                "withstand": "",
                "arcanum": "Fate",
                "primaryFactor": "Duration",
                "cost": ""
            },
            {
                "suggestedRotes": "Intimidation, Occult, Weaponry",
                "withstand": "Composure",
                "primaryFactor": "Potency",
                "reach": [],
                "name": "Grave Misfortune",
                "dots": 3,
                "description": "     This spell attracts misfortune to the subject or makes an already injurious situation considerably worse. \n     The next time the subject suffers at least one point of damage during this spell’s Duration, increase the damage he suffers by the spell’s Potency. A glancing blow instead crushes a bone, for example. The damage type is the same as that of the original source of harm. This affects a maximum number of attacks equal to Potency during the spell’s Duration.",
                "arcanum": "Fate",
                "practice": "Fraying",
                "cost": ""
            },
            {
                "suggestedRotes": "Drive, Crafts, Science",
                "reach": [
                    {
                        "effect": "If the object is blessed, anyone who carries, touches, or uses it also receives the benefits of a boon (see p. 134). If the object is cursed, this user suffers a hex (see p. 134). +1 Reach: By spending a point of Mana, the bonus or penalty may exceed five dice.",
                        "cost": 1
                    },
                    {
                        "effect": "By spending a point of Mana, the bonus or penalty may exceed five dice.",
                        "cost": 1
                    }
                ],
                "primaryFactor": "Potency",
                "practice": "Weaving",
                "withstand": "",
                "description": "     The mage interacts with a lifeless object, bringing fortune to bear on it and making it a tool of destiny. The mage either blesses or curses the object.\n     The object’s equipment bonus is increased or decreased by the spell’s Potency, which may cause it to become a dice penalty if moved below zero. The spell may not cause the bonus or penalty to exceed five dice.",
                "arcanum": "Fate",
                "name": "Monkey’s Paw",
                "dots": 3,
                "cost": ""
            },
            {
                "suggestedRotes": "Medicine, Persuasion, Politics",
                "cost": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The link instead only works one way for one of the subjects — such that the subject suffers harm inflicted on the others but not the reverse."
                    },
                    {
                        "cost": 2,
                        "effect": "The subject is not linked to the mage or any other specific subject. Instead, she suffers any damage, Tilt, or unwanted Condition she inflicts, regardless of whom she harms."
                    }
                ],
                "arcanum": "Fate",
                "dots": 3,
                "description": "     Fate is an instrument of both justice and punishment. This spell braids the fates of two subjects together. Whatever befalls one subject affects the other.\n     Whenever one subject suffers damage, a Tilt, or an unwanted Condition, any others suffer it as well. If Scale is not increased when casting this spell, the mage herself is treated as a subject.",
                "practice": "Weaving",
                "name": "Shared Fate",
                "withstand": "Composure",
                "primaryFactor": "Potency"
            },
            {
                "arcanum": "Fate",
                "description": "     The mage can ensure success at virtually any task he sets out to accomplish. \n     The subject gains the rote quality on a number of mundane dice rolls equal to Potency. The subject’s player can choose which of his rolls are affected (declared before the dice are rolled).",
                "dots": 3,
                "withstand": "",
                "practice": "Perfecting",
                "cost": "1 Mana",
                "primaryFactor": "Duration",
                "suggestedRotes": "Athletics, Crafts, Occult",
                "name": "Superlative Luck",
                "reach": [
                    {
                        "effect": "The subject’s player may apply the spell’s effects to ritual spellcasting rolls, which doubles the Gnosis-derived casting time of those spells.",
                        "cost": 2
                    }
                ]
            },
            {
                "withstand": "",
                "dots": 3,
                "suggestedRotes": "Expression, Occult, Politics",
                "name": "Sworn Oaths",
                "cost": "",
                "practice": "Perfecting",
                "arcanum": "Fate",
                "primaryFactor": "Duration",
                "description": "     The mage can witness a sworn oath and ensure that Fate itself enforces the subject’s adherence to her vow. The subject makes a promise and states the consequences for herself if she violates the agreement. No one can be forced to take such an oath, although a subject may be placed under oath unwittingly if he voluntarily makes a vow and verbally agrees to a specified consequence, even if he doesn’t realize the mage can enforce the oath supernaturally.\n     So long as the subject adheres to the oath she receives a boon (see p. 134). If a supernatural power would force the subject to violate her oath — either by action or inaction — the mage may make a Clash of Wills against the effect. If the subject breaks the oath (whether intentionally or not), she suffers the hex (see p. 134) she agreed to at the time she took the oath. A subject who declares “I will guard your secrets or may I be struck blind,” will suffer the Blinded Tilt for the remaining Duration of the spell if he fails to guard those secrets, for example. Once the subject has broken an oath, further violations of its terms do not levy additional hexes.\n     If cast on multiple subjects, each subject may swear his own oath; this is often used to create contracts between two or more parties.",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "As long as she maintains spell control, the mage is aware whether the spell remains a boon or has shifted to being a hex."
                    }
                ]
            },
            {
                "withstand": "Subject effect’s Potency",
                "practice": "Unraveling",
                "cost": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The quest can be undertaken on the subject’s behalf by another person who wishes to champion her. If the subject is unwilling, this spell is Withstood with Resolve."
                    }
                ],
                "arcanum": "Fate",
                "dots": 4,
                "suggestedRotes": "Academics, Empathy, Survival",
                "primaryFactor": "Potency",
                "description": "     A powerful Witch can aid a hero who labors under a curse, but her remedies often demand strange rituals or arduous quests. This spell can dispel a supernatural effect enforced by the dictates of destiny, including Awakened spells, by Patterning Fate to provide a means by which the subject can escape his curse. While the subject remains under the effects of Atonement, she must complete a task determined by the caster. \n     - Minor curses (1-2 dots) require a minor quest (bathing in a nearby river, donating a small sum to charity, etc.). \n     - Moderate curses (3-4 dots) require a medial quest (reading a rare book available in another city’s library, removing all the graffiti in a neighborhood, etc.). \n     - Major curses (5+ dots) demand major quests (undertaking a months-long pilgrimage, recovering an artifact that has been missing for centuries, etc.).\n     Especially powerful curses, such as those levied by ephemeral entities of Rank 6 or more, will often demand more elaborate tasks to break.",
                "name": "Atonement"
            },
            {
                "suggestedRotes": "Empathy, Occult, Science",
                "reach": [],
                "primaryFactor": "Duration",
                "description": "     The mage can Pattern Fate to manipulate complex probabilities within the spell’s subject or area of effect. This spell allows the mage to dictate any physically possible outcome within the bounds of the spell’s subject, no matter how unlikely.\n     The spell cannot create supernatural effects, but within the bounds of improbability the mage can cause a number of effects equal to Potency, such as: \n     - Create a narrative effect such as controlling how vehicles behave in a multiple-car crash. \n     - By directing once-random biochemical changes within a subject, cause seizures, hallucinations, and physical events, imposing suitable Conditions such as Blind or Disabled. \n     - The mage reduces a subject’s next action to a chance die. \n     - Attack a subject by directing chance around them, or protect a subject from dangerous circumstances; this is not a direct-attack spell, and should use any rules for the hazard.",
                "practice": "Patterning",
                "dots": 4,
                "arcanum": "Fate",
                "cost": "",
                "name": "Chaos Mastery",
                "withstand": ""
            },
            {
                "dots": 4,
                "cost": "",
                "description": "     The mage casts a powerful curse that either encourages the subject to achieve a goal specified by the mage when he casts this spell, or that thwarts the subject’s every attempt to pursue such a goal. The subject must, however, be aware of the goal, and the mage cannot levy impossible tasks.\n     One of the subject’s Aspirations is replaced by the goal. As a goad, the subject suffers ill luck except when taking constructive action to bring her closer to achieving the stated goal. If the subject has not pursued the spell’s objective in a meaningful way within the last 24 hours, she suffers a hex (see p. 134).\n     As a ban, the subject suffers ill luck whenever he attempts to achieve the forbidden goal. For the Duration of the spell, the subject suffers a hex if she actively strives toward it.",
                "suggestedRotes": "Intimidation, Occult, Subterfuge",
                "primaryFactor": "Potency",
                "name": "Divine Intervention",
                "withstand": "Resolve",
                "arcanum": "Fate",
                "practice": "Patterning",
                "reach": []
            },
            {
                "arcanum": "Fate",
                "suggestedRotes": "Occult, Subterfuge, Weaponry",
                "reach": [
                    {
                        "effect": "The spell’s effects are Lasting.",
                        "cost": 2
                    }
                ],
                "practice": "Unraveling",
                "dots": 4,
                "withstand": "Composure",
                "cost": "",
                "description": "     To an Adept of Fate, all fetters on a being’s free will are ultimately breakable, and oaths can be renegotiated. The mage may apply a number of the following effects equal to Potency: \n     - Free a bound ephemeral entity, or soul. \n     - Change the effects of an active boon or hex. \n     - Modify or negate an oath or other supernatural agreement reinforced by the dictates of Fate. \n     - Change or dispel a conditional trigger. \n     - Modify the Doom of a subject with the Destiny Merit.",
                "name": "Sever Oaths",
                "primaryFactor": "Duration"
            },
            {
                "name": "Strings of Fate",
                "arcanum": "Fate",
                "suggestedRotes": "Academics, Persuasion, Stealth",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The spell presents opportunities to work toward the specified event once per day"
                    }
                ],
                "primaryFactor": "Duration",
                "cost": "",
                "practice": "Patterning",
                "description": "     The roads of destiny fork and converge, governing the probability of events. An adept of Fate can re-weave the strings of Fate on a subject, encouraging (if not ensuring) that a specified event will happenas long as the spell remains active.\n     The mage specifies an event that she wishes to happen to the subject. If the event would be possible without magic or any effort on the subject’s part, it occurs as soon as circumstances allow as long as the spell’s Duration is in effect. If the event requires the subject’s participation or cannot take place without a change in circumstances, the spell introduces opportunities to work towards the event, at least once per week while the spell remains on the subject. If the event is simply impossible, the spell has no effect.\n     For example, if a mage casts the spell on herself and specifies that she will meet with her mentor while they are both in the same city, they will “randomly” cross paths at first opportunity. If she casts it on a Sleepwalker ally and specifies that he will recover a stolen artifact (when, unknown to her, it has been moved) he will find travel tickets for the artifact’s new location, clues pointing there, or reasons to travel there. If she cast it on a student and specifies that he will become a doctor, circumstances will hint at a transfer to pre-med.\n     The spell cannot deal damage directly, though it can put subjects in harm’s way. For example, a mage could curse a victim with this spell specifying that she will be in a car wreck, or exposed to a disease.",
                "withstand": "Resolve",
                "dots": 4
            },
            {
                "cost": "",
                "arcanum": "Fate",
                "dots": 5,
                "practice": "Making",
                "name": "Forge Destiny",
                "primaryFactor": "Duration",
                "suggestedRotes": "Intimidation, Occult, Persuasion",
                "description": "     If a Master of Fate does not have a hero of destiny handy, he can simply make one. He has several means of accomplishing this at his disposal, and may apply one of the following effects: \n     - The mage grants the subject a Supernatural Merit for which she qualifies with a maximum rating equal to the spell’s Potency. Sanctity of Merits (see p. 99) doesn’t apply to the loss of this Merit. \n     - The mage increases or decreases the subject’s rating in a Supernatural Merit by dots equal to Potency. \n     - The mage imposes Aspirations and Obsessions on the subject equal to Potency, replacing ones chosen by the Storyteller. \n     - The mage chooses the subject’s Doom (p. 100). This can affect subjects who don’t have the Destiny Merit.",
                "reach": [],
                "withstand": "Composure"
            },
            {
                "description": "     This spell causes events to unfold according to the mage’s dictates. The mage receives a number of Intercessions equal to Potency, which she may use as a reflexive action during the spell’s Duration. Spending one Intercession can achieve the following, affecting a single subject within sensory range: \n     - Increase the number of successes on a roll by one after the dice are rolled. \n     - Decrease the number of successes on a roll by one after the dice are rolled. If this reduces the number of successes to less than zero, a dramatic failure results. \n     - Cause a reasonably likely event to happen immediately and conveniently for the mage. An old man suffers a heart attack. A car hits a pedestrian on the sidewalk.",
                "name": "Miracle",
                "withstand": "",
                "practice": "Making",
                "cost": "",
                "dots": 5,
                "reach": [
                    {
                        "effect": "Spend one Intercession and one Willpower to bring about a low-probability event. Lightning hits someone standing on the roof during a storm. Doctors bring a patient back from the edge of death using an experimental medical procedure.",
                        "cost": 1
                    },
                    {
                        "cost": 2,
                        "effect": "Spend one Intercession, one Willpower, and one Mana to achieve the incredible. This doesn’t make the impossible possible, but virtually any event with a mundane, real-world precedent is fair game. A spark causes a car to explode at a gas station. A man falls out of a plane and survives without any major injuries."
                    }
                ],
                "primaryFactor": "Potency",
                "suggestedRotes": "Academics, Persuasion, Subterfuge",
                "arcanum": "Fate"
            },
            {
                "withstand": "Composure",
                "reach": [
                    {
                        "effect": "The mage can adjust the sensitivity of the curse. She could bless only attempts to injure the subject but not to murder him, for example.",
                        "cost": 1
                    }
                ],
                "cost": "",
                "description": "     One of the most terrifying curses in the arsenal of a Master of Fate, this spell turns the world against the victim. \n     - Anyone who encounters the subject instinctively feels uncomfortable around him, intuitively sensing the curse. Most people treat him indifferently at best — if not with open hostility. If the subject is using the Social maneuvering system (see p. 215), the impression level drops by one (from good to average, for instance). If not, the subject takes a 140 chapter four: magic penalty equal to Potency to any Social actions to persuade others to aid him or treat him with kindness. \n     - Any actions aimed at helping the subject or offering aid suffer the effects of a hex (see p. 134). This includes everything from an attempt to lift the curse to providing the subject with directions to the nearest bus stop. \n     - Any actions aimed at harming the subject enjoy the effects of a boon (see p. 134). This includes all forms of harm — from outright murder, to theft, to lies that cause the subject inconvenience. The caster must account for any Reach involved in the boon and hex separately.",
                "arcanum": "Fate",
                "suggestedRotes": "Investigation, Medicine, Politics",
                "primaryFactor": "Potency",
                "name": "Pariah",
                "dots": 5,
                "practice": "Unmaking"
            },
            {
                "suggestedRotes": "Intimidation, Occult, Science",
                "practice": "Making",
                "reach": [],
                "arcanum": "Fate",
                "description": "     The mage creates chaotic conditions: rains of frogs, swarms of locusts, unscheduled total solar eclipses, and other similarly “Fortean” occurrences. This terrifying and obviously supernatural event wreaks havoc in the area, creating Environmental Tilts of the player’s choosing. \n     Most Sleepers suffer an immediate Breaking Point when they witness this spell.",
                "withstand": "",
                "dots": 5,
                "primaryFactor": "Duration",
                "cost": "",
                "name": "Swarm of Locusts"
            }],
            forces: [{
                "description": "     The mage can operate or shut down electrical devices with magic. With this spell she can only cause existing devices to work as they normally would when powered on, or when the power is shut off. For example, she could “hotwire” a car without actually needing to touch any wires, turn lights off and on, and cause industrial machinery to power up or turn off. This spell does not give her further control over these devices, but does allow her to engage or shut down devices that might otherwise require passwords or electronic keys.",
                "dots": 1,
                "withstand": "",
                "arcanum": "Forces",
                "primaryFactor": "Duration",
                "practice": "Compelling",
                "name": "Influence Electricity",
                "reach": [],
                "suggestedRotes": "Computers, Crafts, Science",
                "cost": ""
            },
            {
                "practice": "Compelling",
                "withstand": "",
                "dots": 1,
                "name": "Influence Fire",
                "cost": "",
                "arcanum": "Forces",
                "primaryFactor": "Duration",
                "description": "     Legends of mages controlling fire begin with this spell, which allows a mage to guide the path of existing flames. This lets her cause flames to arc or stretch, command them to burn along a particular path (or prevent them from another), or even form particular fiery shapes. At this level the mage cannot increase the flames in size or intensity, though she could direct them into a source of fuel.",
                "reach": [
                    {
                        "effect": "By efficient use of fuel and direction, the mage can increase or decrease the size of a fire by one level (see Transform Energy, below).",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Crafts, Science, Survival"
            },
            {
                "cost": "",
                "dots": 1,
                "practice": "Compelling",
                "withstand": "",
                "arcanum": "Forces",
                "description": "     Initiates can guide the direction of existing forces. With this spell, the mage can control the flow of heat in the area. While she cannot increase or create heat, the mage can direct heat from a radiator across the room to her, or pull any ambient warmth shed by car engines, human bodies, or environmental sources. This can keep her warm in cold weather or cool in hot weather, preventing heat- or cold-related damage and Conditions caused by Extreme Environments up to Level 2 (see Extreme Environments, p. 224).",
                "suggestedRotes": "Occult, Science, Survival",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage can safely control the flow of heat enough to keep safe in environments up to Level 3."
                    },
                    {
                        "cost": 2,
                        "effect": "At this level, the mage can protect herself and others in the spell’s area from hot or cold environments up to Level 4."
                    }
                ],
                "name": "Influence Heat",
                "primaryFactor": "Duration"
            },
            {
                "description": "     With a simple spell, the mage can “nudge” kinetic forces, enhancing a subject’s motion. This spell allows the subject to run a little faster, jump a little further, or lift a little more, not by altering forces but by maximizing the subject’s kinetic energy use. This has the following benefits: \n     - The subject gains a bonus on rolls to resist fatigue equal to Potency. Actions are less strenuous when moving so efficiently. \n     - Add the caster’s Forces dots to the total distance (in yards) covered on a jump, to the subject’s swimming and running Speed, and to any climbing rolls.",
                "practice": "Compelling",
                "arcanum": "Forces",
                "name": "Kinetic Efficiency",
                "primaryFactor": "Duration",
                "cost": "",
                "suggestedRotes": "Athletics, Science, Survival",
                "dots": 1,
                "reach": [],
                "withstand": ""
            },
            {
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The spell automatically compensates for and allows the mage to ignore the deleterious effects of sudden extreme stimulus."
                    }
                ],
                "practice": "Unveiling",
                "withstand": "",
                "suggestedRotes": "Investigation, Science, Stealth",
                "name": "Nightvision",
                "dots": 1,
                "arcanum": "Forces",
                "cost": "",
                "description": "     Despite its name, the Nightvision spell enhances ambient light, fine-tunes the mage’s sense for vibrations and thermal changes, and grants her the power to see into the infrared and ultraviolet spectra. She becomes able to intuitively feel as well as see forms of electromagnetic radiation, sound, and kinetic energies, allowing her to navigate without penalty in complete darkness. She can still see and make out details, even in the dark, although colors are somewhat muted. This spell has the side effect of making the caster much more vulnerable to light; while in effect, she suffers no penalties from dim or even no lighting, but suffers penalties from bright lights as she normally would from darkness. Bright lights and extremely loud sounds can disorient or even inflict the Blind Condition on her for the spell’s Duration.",
                "primaryFactor": "Duration"
            },
            {
                "suggestedRotes": "Empathy, Investigation, Science",
                "withstand": "",
                "practice": "Unveiling",
                "cost": "",
                "primaryFactor": "Duration",
                "description": "     Casting this spell allows the mage to hear infrasound and ultrasound frequencies beyond what human ears can normally perceive. While active, she can hear sounds outside the normal frequency, from high-frequency (dog whistles, sonar) to low-frequency (the distant rumble of diesel engines, industrial sounds normally lost to humans in the noise). Apply the spell’s Potency as a dice bonus to relevant dice pools, such as rolls to avoid ambush.",
                "dots": 1,
                "arcanum": "Forces",
                "name": "Receiver",
                "reach": []
            },
            {
                "description": "     A mage with this spell can listen to free-floating data transmissions, such as those broadcast by radios, cell phones, wireless modems, and more. The magic translates this electromagnetic noise into something she can understand, although it preserves the original transmission language. With this spell, the mage needs no receiver to listen or even see signals. Transmitting cables glow before her eyes with streams of data, while she might see a shimmer or even fleeting glimpses of images in the air. Satellite internet and TV programming, closed walkie-talkies, CB broadcasts, and radio transmissions all become open to her senses, as well as wireless communications.",
                "primaryFactor": "Duration",
                "dots": 1,
                "name": "Tune In",
                "practice": "Knowing",
                "cost": "",
                "suggestedRotes": "Computers, Empathy, Science",
                "arcanum": "Forces",
                "reach": [],
                "withstand": ""
            },
            {
                "cost": "",
                "name": "Control Electricity",
                "description": "     The mage may alter the flow of electricity as well as diminish its current. She cannot increase the current without some device capable of generating it, since she cannot create electricity from nothing. For example, the mage can direct the electricity in a building to single or multiple outlets, cut the power, or divide power going to one outlet to many other sources. This requires a method of conduction, like existing wiring or metal. She can also cause existing electrical currents to arc (such as striking a target near a wall outlet), or redirect it away from a particular device. Causing a short or using the electrical current to attack a target usually burns out the breakers or shorts out a device afterward, unless it’s made to withstand the stresses of power fluctuations. Damage caused by this spell uses the electrical damage rules on p. 224. By directing the flow away from a subject, she subtracts the spell’s Potency from the damage of an electrical source.\n     Each level of Potency in the spell allows the mage to control one line of power. If she diverts it somewhere else, the Storyteller determines what occurs — a socket or device could overload, or if the mage is careful she can avoid damaging components and simply change the course of power. If instead she wants to diminish the power, it drops by one level for each point of Potency; a Potency of 4 reduces a subway line’s current to that of an ordinary wall socket, for example, or Potency 5 cuts it completely. (See the table below under Transform Energy.)",
                "practice": "Ruling",
                "primaryFactor": "Duration",
                "suggestedRotes": "Crafts, Computers, Science",
                "reach": [],
                "arcanum": "Forces",
                "withstand": "",
                "dots": 2
            },
            {
                "cost": "",
                "name": "Control Fire",
                "dots": 2,
                "arcanum": "Forces",
                "withstand": "",
                "suggestedRotes": "Crafts, Science, Survival",
                "reach": [],
                "primaryFactor": "Duration",
                "description": "     The mage can exert control over a fire, fueling it to increase its size and intensity or depriving it of fuel to snuff it out. She can only control existing flames at this level, but can change a small campfire into a roaring inferno or bring even an out-ofcontrol fire down to manageable levels. \n     For each level of Potency, the mage chooses one of the following effects (see Transform Energy, below): \n     - Increase or decrease the heat of the fire by one level. \n     - Increase or decrease the size of the fire by one level.\n     If the fire’s heat or size are reduced to less than one, it is extinguished. Unless extinguished, once the spell’s Duration ends a diminished fire will eventually spread back out along available fuel.",
                "practice": "Ruling"
            },
            {
                "cost": "",
                "withstand": "",
                "primaryFactor": "Duration",
                "description": "     1The mage can redirect the force of gravity in an area. She can alter the direction of its pull, causing affected objects to “fall” upwards or horizontally. She can’t do more than change its direction at this level, but she can make it nearly impossible to approach a specific object or area without some means of overcoming gravity, like flight or climbing gear.\n     Anyone and anything affected by the spell that is not secured “falls” in the direction chosen by the caster. Victims may suffer damage if they collide with objects. Someone trapped in an area where gravity propels him upward might be stuck falling to the edge of the spell’s radius, then back down again as normal gravity takes over, only to fall upward again as he enters the spell’s area. A person or creature capable of action can make a roll to escape, at the Storyteller’s discretion, by grabbing onto a nearby object or otherwise finding the means to control her position.",
                "reach": [],
                "suggestedRotes": "Athletics, Occult, Science",
                "practice": "Ruling",
                "arcanum": "Forces",
                "dots": 2,
                "name": "Control Gravity"
            },
            {
                "description": "     The mage can now increase or decrease the temperature of an area. Each level of Potency allows a change of 1 level of Extreme Environment to produce heat or cold, counting a temperate room temperature as “zero.” For example, with Potency 3, a mage could transform a Level 1 Extreme Environment based on cold into a Level 2 Environment based on heat.",
                "arcanum": "Forces",
                "suggestedRotes": "Athletics, Science, Survival",
                "cost": "",
                "withstand": "",
                "reach": [],
                "dots": 2,
                "practice": "Ruling",
                "name": "Control Heat",
                "primaryFactor": "Duration"
            },
            {
                "arcanum": "Forces",
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The spell can create a mirroring effect or complete black-out by turning all light in the area back on itself or away from onlookers. The spell imposes the Blinded Tilt in the affected area, or provides substantial cover, although as the effect is only visual the cover has no Durability"
                    }
                ],
                "dots": 2,
                "practice": "Ruling",
                "description": "     The mage can dim or intensify existing light the spell’s area of effect, whether from an artificial or natural source. This can cause a 40-watt bulb to shine as brightly as a floodlight or make the sunlight on an overcast day like that of a clear summer morning. The magic modifies the light emitted by the source, and not the source or the emission itself, so this won’t cause a bulb to burn itself out or increase the heat of sunlight without other spells. Each level of Potency in the spell doubles or halves the light’s candescence.\n     The spell allows the mage to focus or disperse light, and even alter its wavelength on the spectrum. She could turn a torch into a blacklight, focus a lamp’s rays into a laser, split its lights into a rainbow spectrum as though viewed through a prism, or cause a refraction effect like looking upon something in shallow water. These effects cause the Poor Light Tilt in the affected area.",
                "name": "Control Light",
                "suggestedRotes": "Crafts, Investigation, Science",
                "cost": "",
                "withstand": ""
            },
            {
                "suggestedRotes": "Expression, Stealth, Science",
                "dots": 2,
                "withstand": "",
                "name": "Control Sound",
                "cost": "",
                "description": "     This spell allows a mage to amplify or weaken the volume of sound in the spell’s area of effect. She can make a loudspeaker into a thunderous blast or a barely audible squeak. Each level of Potency doubles or halves the volume of sound in the targeted area, creating a zone of altered sound. For example, casting this spell on a podium at the front of the room affects the sounds of anyone standing at the podium. The mage can also influence the direction of existing sounds. She can focus sound waves from across the room to hear a whispered conversation, ensure her own voice does not reach anyone but her intended target, or cause noises to emanate from nearby locations instead of their original sources. The Scale factor determines the area she can affect. \n     Loud enough sounds can cause the Deafened Tilt in combat. By directing her sound away from a subject that might possibly notice her, the mage inflicts a penalty equal to her Arcanum dots to the subject’s Perception rolls to hear her approach. \n     - Focusing sound waves to a specific point means that anyone outside of the chosen target (as determined by the Size of Target table) cannot hear the chosen sounds. \n     - Listening to sounds across an area uses the Area of Effect Scale factor, determining the distance at which the mage can listen in on something. Doing so does not rob the source of its sound. To do that requires focusing the sound completely away from the source (above).\n     This spell can also be used to alter the tone of a given sound, including modifying a target’s voice to sound like another. Emulating a specific voice might require an Expression + Subterfuge roll to get it right.",
                "arcanum": "Forces",
                "practice": "Ruling",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage can create an echoing effect by “nudging” sound waves into nearby obstacles. This imposes a penalty to Stealth rolls in the affected area equal to the spell’s Potency, to a maximum of –5."
                    },
                    {
                        "effect": "The caster gains a bonus to hearing-based Perception rolls within the affected area equal to the Potency of the spell, to a maximum of +5.",
                        "cost": 1
                    }
                ],
                "primaryFactor": "Duration"
            },
            {
                "practice": "Ruling",
                "description": "     The mage can control existing weather patterns. She can force a light shower to become a thunderstorm, summon up fog on a clear morning, make a warm day into an unbearably hot one or conjure a cooling breeze. Drastic changes from existing weather require Reach, as noted below. The weather begins to change immediately upon casting the spell, with new systems taking shape within minutes. This spell allows the mage to change or create weather-based Extreme Environments up to Level 4, as well as cause a wide variety of environmental Tilts. Potency determines the maximum amount by which an Extreme Environment can change, up to a maximum of Level 4 (and a minimum of level 0). Listed below is an example set of Tilts possible for weather patterns, but it is by no means exhaustive. Note that without further spells, the mage is not immune to weather Tilts she creates. \n     - Blizzard \n     - Extreme Cold \n     - Extreme Heat \n     - Heavy Rain \n     - Heavy Winds",
                "withstand": "",
                "suggestedRotes": "Academics, Science, Survival",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "1 Reach: The weather changes more gradually, over the next few hours, giving the caster time to prepare or making the weather seem more natural."
                    },
                    {
                        "cost": 2,
                        "effect": "Required for more drastic changes. Examples: \n     - Creating thick fog out of a sunny morning \n     - Making a hot summer day turn to freezing rain \n     - Clearing a blizzard into a cool but clear evening"
                    }
                ],
                "name": "Control Weather",
                "primaryFactor": "Duration",
                "dots": 2,
                "arcanum": "Forces",
                "cost": ""
            },
            {
                "name": "Environmental Shield",
                "practice": "Shielding",
                "cost": "",
                "primaryFactor": "Duration",
                "arcanum": "Forces",
                "suggestedRotes": "Occult, Science, Survival",
                "dots": 2,
                "description": "     The mage can shield herself against harmful environmental conditions. This spell provides complete resistance to any Conditions or Tilts caused by environments, up to an Extreme Environment level of the spell’s Potency. The spell only protects against indirect damage, like heat and cold and minor hazards like hail. The mage can still drown or be crushed by crashing waves. While the spell wouldn’t protect her against lightning if something forced it to strike her, she wouldn’t naturally attract the bolt. The spell requires a Clash of Wills to work against magical weather effects.",
                "reach": [],
                "withstand": ""
            },
            {
                "practice": "Veiling",
                "name": "Invisibility",
                "withstand": "",
                "arcanum": "Forces",
                "reach": [],
                "suggestedRotes": "Larceny, Science, Stealth",
                "cost": "",
                "primaryFactor": "Duration",
                "dots": 2,
                "description": "     This spell can render its subject completely invisible, masking it from all forms of light. Even cameras cannot detect the object, no matter what type of filter or lenses they use. This spell does not mask the sounds an object makes, although when Combined with “Control Sound” (see above), the target can be made invisible and soundless."
            },
            {
                "cost": "",
                "description": "     The mage focuses the kinetic force of bludgeoning attacks to such a pinpoint that they cause damage like piercing weapons. 144 chapter four: magic This only works on the subject’s unarmed attacks and not any held weapons, though body-hugging objects like gloves and shoes benefit from the spell’s effect. Unarmed attacks (including those made in grapples) gain a weapon bonus equal to Potency, to a maximum of 5, and inflict lethal damage",
                "practice": "Ruling",
                "primaryFactor": "Duration",
                "dots": 2,
                "suggestedRotes": "Athletics, Brawl, Science",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The spell applies the Knocked Down Tilt."
                    },
                    {
                        "effect": "The spell applies the Stunned Tilt.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "This spell affects held weapons."
                    },
                    {
                        "cost": 2,
                        "effect": "The spell affects thrown weapons. Alternately, the spell affects firearms, granting them greater penetrative ability. Bullets gain Armor Piercing equal to the spell’s Potency."
                    }
                ],
                "name": "Kinetic Blow",
                "withstand": "",
                "arcanum": "Forces"
            },
            {
                "practice": "Ruling",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The signal sent can be “encrypted” so that only certain actions, like specific keystrokes or frequencies, can receive them properly. Otherwise, they simply turn up as unintelligible “noise.”"
                    }
                ],
                "primaryFactor": "Duration",
                "name": "Transmission",
                "suggestedRotes": "Crafts, Expression, Science",
                "withstand": "",
                "cost": "",
                "arcanum": "Forces",
                "dots": 2,
                "description": "     The mage can hijack existing signals and change the transmitted data or its destination. She can shorten or lengthen the transmission, and even change frequency, such as turning a wifi broadcast into a television signal. At this level, she must still work with a signal already present. Mimicking specific sounds or information requires a Skill roll or access to the data to be transmitted."
            },
            {
                "description": "     The mage focuses light entering her subject’s senses, greatly magnifying vision. Without an Unveiling spell like “Nightvision” (p.141), the spell can only affect visible wavelengths. For example, a mage using this spell on herself could look closely at a bird circling high above, or zoom in to great detail to examine a layer of dust on an object, but she couldn’t see things that would only appear under a blacklight.\n     If a character magnifies vision to focus on small-scale occurrences, the Storyteller may call for Intelligence + Science rolls to make sense of what she’s seeing. Every level of Potency doubles the distance the mage can see clearly before suffering penalties, although atmospheric conditions can still cloud her view. Add Potency to dice rolls to notice small details.",
                "primaryFactor": "Duration",
                "dots": 2,
                "arcanum": "Forces",
                "practice": "Ruling",
                "reach": [
                    {
                        "effect": "The subject can see clearly out to a distance of 1 mile per dot of Forces.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The subject can clearly discern dust-sized particles."
                    },
                    {
                        "effect": "The subject no longer suffers penalties from atmospheric conditions.",
                        "cost": 1
                    },
                    {
                        "effect": "The subject can see microscopic particles, even the molecular bonds between objects.",
                        "cost": 2
                    }
                ],
                "withstand": "",
                "suggestedRotes": "Investigation, Science, Survival",
                "name": "Zoom In",
                "cost": ""
            },
            {
                "cost": "",
                "name": "Call Lightning",
                "practice": "Weaving",
                "arcanum": "Forces",
                "description": "     With a gesture the mage can conjure lightning down from a stormy sky to strike her foes. She must use this spell with an existing storm or one she sets into motion with “Control Weather” (see p. 143), since she cannot create lightning from nothing at this level.\n     While the lightning bolt itself is all but unavoidable, the crackling build-up of energy gives a target warning. The bolt can only strike a target it could actually reach, so the target must be exposed in some way. With multiple subjects, the lightning forks, striking each simultaneously. It does damage according to the Electricity rules on p. 224.",
                "dots": 3,
                "withstand": "",
                "suggestedRotes": "Athletics, Firearms, Science",
                "primaryFactor": "Potency",
                "reach": []
            },
            {
                "dots": 3,
                "arcanum": "Forces",
                "cost": "",
                "withstand": "",
                "suggestedRotes": "Athletics, Science, Survival",
                "practice": "Fraying or Perfecting",
                "reach": [],
                "primaryFactor": "Duration",
                "name": "Gravitic Supremacy",
                "description": "     The mage may increase or decrease gravity. If increasing it, each level of Potency subtracts 3 Speed from all subjects, as well as penalizing jumping rolls, subtracting a distance equal to Potency from success rolled. If Potency exceeds the Strength of an animal caught in the area, the subject suffers –1 to all Physical dice pools for each point of difference. Flying creatures must succeed on a Strength + Athletics roll each turn or plummet downward at a Speed equal to the Potency.\n     Nullifying gravity increases the Speed of anyone within the area of effect by the spell’s Potency. Increase jumping distance per success rolled by the spell’s Potency. Additionally, the mage can cause objects to fall in any direction she chooses when she creates the spell."
            },
            {
                "suggestedRotes": "Athletics, Brawl, Science",
                "dots": 3,
                "practice": "Weaving",
                "withstand": "",
                "arcanum": "Forces",
                "cost": "",
                "primaryFactor": "Duration",
                "name": "Telekinesis",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The player may divide Potency among two of Strength, Dexterity, and Speed. This Reach may be performed twice."
                    }
                ],
                "description": "     The mage can conjure telekinetic force to lift or manipulate an object remotely. Apply the spell’s Potency to one of the force’s Strength (raw lifting/pushing power), Dexterity (fine manipulation), or Speed. The other two default to 1. Moving objects using Telekinesis requires concentration as an instant action each turn; if the mage fails to concentrate on moving the force, it simply hangs suspended, holding any objects it held before but no longer pushing or pulling (or manipulating objects, if used for that). The mage may then resume directing the telekinetic force until the spell’s Duration expires."
            },
            {
                "suggestedRotes": "Athletics, Firearms, Science",
                "arcanum": "Forces",
                "primaryFactor": "Potency",
                "description": "     The mage manipulates kinetic forces to crush subjects or form a “ball” of highly pressurized air and kinetic energy that she can hurl at foes. The spell inflicts bashing damage equal to its Potency.",
                "name": "Telekinetic Strike",
                "dots": 3,
                "withstand": "",
                "practice": "Weaving",
                "cost": "",
                "reach": [
                    {
                        "effect": "The spell inflicts the Knocked Down or Stunned Tilt.",
                        "cost": 1
                    }
                ]
            },
            {
                "cost": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage can use Turn Momentum’s effect as a reflexive action instead."
                    },
                    {
                        "effect": "The mage may control where the object is redirected to, as long as it is within 90 degrees of the original arc in any direction.",
                        "cost": 1
                    },
                    {
                        "effect": "The object’s momentum can be fully reversed. Thrown and Ranged weapons strike their users.",
                        "cost": 2
                    }
                ],
                "primaryFactor": "Potency",
                "arcanum": "Forces",
                "practice": "Weaving",
                "suggestedRotes": "Athletics, Firearms, Science",
                "description": "     This spell allows the mage to redirect a target’s momentum. Usually this forms a shield against projectiles, but it can be used on larger objects, as well. When a mage could use her Defense against an object, she may use this spell instead to redirect it as an instant action. If cast with a prolonged Duration, the mage may take a Dodge action each turn and use this spell instead of receiving the normal benefits for Dodging.\n     The spell allows the mage to turn a number of moving objects up to Potency. She does not have fine control over where each object is deflected, and the spell cannot make objects reverse direction entirely, only veer off target. The maximum Size of a redirected object is determined by the spell’s Scale factor. Because the spell acts upon an object’s momentum and not the object itself, the weight and speed are irrelevant to this spell’s effect; if the mage can use the spell, the magic will thwart any object within its parameters. The redirected object maintains all its original momentum. By default, the Storyteller determines a random direction for the object to travel when redirected. \n        Add Time *: With Time 1 and a Reach, the mage can turn objects too fast for her to gain Defense against them.",
                "withstand": "",
                "dots": 3,
                "name": "Turn Momentum"
            },
            {
                "practice": "Fraying or Perfecting",
                "suggestedRotes": "Athletics, Drive, Science",
                "primaryFactor": "Potency",
                "cost": "",
                "arcanum": "Forces",
                "name": "Velocity Control",
                "description": "     The mage can greatly increase or decrease an object’s velocity. Its speed doubles or halves for each level of the spell’s Potency. For example, a car traveling 50 MPH is increased to 200 MPH with Potency 2, or an incredible 800 MPH with Potency 4. Likewise, if the mage reduces its speed, the same car would slow to about 13 MPH at Potency 2, or about 4 MPH with Potency 4. The mage must be able to affect the target’s entire Size to affect it with this spell; she cannot target only the front tire of an 18-wheeler with its trailer (Size 30) and bring it to a stop.\n     The velocity change affects damage based on collisions. It also adds or subtracts one point of damage from projectile attacks and can reduce them to 0. The spell cannot reduce a moving object’s speed to 0 (that would require an Unmaking spell).",
                "withstand": "",
                "dots": 3,
                "reach": []
            },
            {
                "reach": [],
                "description": "     The mage degrades electromagnetic energy within the spell’s subject, wrecking electronic devices. The spell is capable of snuffing out mundane electrical devices, although some military-grade devices are shielded, requiring Potency equal to their level of hardening. Shorting out magical devices requires a Clash of Wills. When used against a living being, the damage to their nervous system acts as a direct damage spell, inflicting Potency in lethal damage.",
                "arcanum": "Forces",
                "suggestedRotes": "Crafts, Computers, Science",
                "primaryFactor": "Potency",
                "dots": 4,
                "cost": "",
                "withstand": "",
                "name": "Electromagnetic Pulse",
                "practice": "Unraveling"
            },
            {
                "dots": 4,
                "description": "     The subject floats through the air using telekinetic force. Its air speed equals the spell’s Potency. Subjects may use their Defense against attacks, if applicable. Unwilling subjects Withstand the spell with Stamina.\n     The mage may direct the subject’s levitation each turn as an instant action. If she fails to do so, the object simply remains afloat in midair, coming to a stop wherever it was when she stopped moving it.",
                "arcanum": "Forces",
                "suggestedRotes": "Athletics, Science, Survival",
                "cost": "",
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "effect": "The subject retains momentum from turn to turn, floating slowly in whatever direction the mage initially directed it.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The subject flies fluid and free. She instinctively creates the telekinetic force as she maneuvers in midair, granting her incredible speed and maneuverability. The subject gains an air Speed equal to the mage’s Gnosis + the spell’s Potency. While airborne she can make a Dexterity + Athletics roll to avoid obstacles, gains her normal Defense against attacks, and can fly without exhausting herself as she would by running."
                    }
                ],
                "withstand": "Stamina",
                "name": "Levitation",
                "practice": "Patterning"
            },
            {
                "practice": "Patterning",
                "suggestedRotes": "Crafts, Drive, Science",
                "name": "Rend Friction",
                "description": "     The mage alters the level of friction upon a target. She can increase it to the point where simple air friction shears the target to pieces, or lower it so much that an object can continue moving almost indefinitely.\n     If the spell increases friction, every 3 yards that the target moves in a given turn (round down) causes it one point of lethal damage to a maximum of Potency damage. The target must be exposed to open air, and non-magical armor is only half as effective. Conversely, if the mage decreases friction, an object doubles the length it moves before slowing down per point of Potency, even after it has stopped accelerating or maintaining its speed. This also doubles weapon ranges in the same way. Vehicles suffer a penalty to their Handling equal to the spell’s Potency, as the vehicle fails to stop or react in a way the operator can fully control",
                "withstand": "",
                "arcanum": "Forces",
                "cost": "",
                "reach": [],
                "dots": 4,
                "primaryFactor": "Potency"
            },
            {
                "cost": "",
                "reach": [
                    {
                        "effect": "The spell deals aggravated damage. Cost: 1 Mana.",
                        "cost": 1
                    }
                ],
                "description": "     The mage channels ambient energies as a weapon, pouring them into her subject. This spell deals lethal damage equal to its Potency.",
                "dots": 4,
                "name": "Thunderbolt",
                "arcanum": "Forces",
                "practice": "Patterning",
                "suggestedRotes": "Athletics, Firearms, Science",
                "primaryFactor": "Potency",
                "withstand": ""
            },
            {
                "reach": [
                    {
                        "cost": 1,
                        "effect": "the mage may decrease the level of the energy transformed by one. This Reach may be applied multiple times. +1 Reach: the mage may split a source of energy into two different kinds or leave part of the original source behind — for example, turning an inferno into light equivalent to daylight and sound equivalent to a scream. +1 Reach: For one Mana, the mage may increase the level of the energy transformed by one."
                    },
                    {
                        "effect": "the mage may split a source of energy into two different kinds or leave part of the original source behind — for example, turning an inferno into light equivalent to daylight and sound equivalent to a scream.",
                        "cost": 1
                    },
                    {
                        "effect": "For one Mana, the mage may increase the level of the energy transformed by one.",
                        "cost": 1
                    }
                ],
                "primaryFactor": "Duration",
                "cost": "",
                "practice": "Patterning",
                "name": "Transform Energy",
                "withstand": "",
                "suggestedRotes": "Crafts, Occult, Science",
                "description": "     All energy shares sympathy, born perhaps from the same cosmic source in the same instant. An Adept of Forces can use that sympathy to transform one energy type into another. The table below serves as a rough equivalency chart for different energy types. She can change a room full of light into heat, at once turning it into a pitch-black oven. She might also change the thunderous roar of a waterfall into electricity, far more efficient than any hydroelectric dam. The spell may affect energy of a level equal to Potency",
                "dots": 4,
                "arcanum": "Forces"
            },
            {
                "practice": "Making",
                "arcanum": "Forces",
                "primaryFactor": "Duration",
                "withstand": "",
                "description": "     The mage summons a major weather system as severe as a tornado, tsunami, monsoon, or hurricane. The weather effects take hold in minutes and dissipate immediately once the spell expires. This allows the mage to create Extreme Environments of nearly any kind up to Level 4, as per Control Weather (see above) but without the limitations. She does not have to call up disasters; she can make a rainstorm appear in a cloudless blue sky if she desires.",
                "suggestedRotes": "Crafts, Occult, Science",
                "dots": 5,
                "name": "Adverse Weather",
                "reach": [
                    {
                        "effect": "The mage can create weather drastically different from the local conditions, such as a monsoon during the savannah’s dry season.",
                        "cost": 1
                    }
                ],
                "cost": ""
            },
            {
                "practice": "Making",
                "primaryFactor": "Duration",
                "suggestedRotes": "Crafts, Occult, Science",
                "dots": 5,
                "withstand": "",
                "name": "Create Energy",
                "cost": "",
                "reach": [],
                "description": "     The mage creates energy from othing within a subject or area of effect. She can create light (including sunlight), fire, radiation, sound, and electricity. Use the chart under Transform Energy above as an example of the levels she can create within the affected area. For fire, assume the heat is +1 for Potency 1–2, +2 for Potency 3–4 and +3 for Potency 5+. After creating the energy, she can modify it with Control spells. Creating radiation also creates an Extreme Environment hazardous to living beings.",
                "arcanum": "Forces"
            },
            {
                "dots": 5,
                "practice": "Making",
                "withstand": "",
                "suggestedRotes": "Crafts, Science, Survival",
                "primaryFactor": "Potency",
                "arcanum": "Forces",
                "description": "     The mage unleashes an earthquake to crack the ground. This spell inflicts damage equal to its Potency to all structures within the affected area. Most modern buildings are built to endure earthquakes well and subtract their Durability from the damage as normal. Smaller or flimsier structures do not apply Durability to the damage at all. Living beings may make a Dexterity + Athletics roll to maintain their balance as the ground pitches and heaves beneath them. Failure means the character suffers bashing damage as she falls to the ground and is thrown about wildly, unless the fall sends her tumbling down stairs or over a ledge. Collapsing buildings can cause much more catastrophic damage or leave victims trapped under tons of debris.",
                "cost": "",
                "reach": [],
                "name": "Earthquake"
            },
            {
                "arcanum": "Forces",
                "cost": "",
                "reach": [],
                "primaryFactor": "Potency",
                "description": "     Rather than create energy, the mage snuffs out energies within a subject or area (see the chart “Transform Energy,” above, for the Potency required by different levels of energy.) The destruction is spectacular, explosively scattering the affected energies into particles. If used on a creature, this spell is instantly fatal but Withstood by Stamina.",
                "dots": 5,
                "suggestedRotes": "Intimidation, Science, Survival",
                "withstand": "",
                "name": "Eradicate Energy",
                "practice": "Unmaking"
            }],
            life: [{
                "primaryFactor": "Duration",
                "description": "     By observing a creature and casting this spell, the mage can discern details such as the species, age, sex, and overall health of a plant or animal, including humans. She may identify how many dots in Physical Attributes the subject has. Any illnesses or injuries, including Personal Tilts and Conditions, suffered by the creature become obvious to her sight. This spell identifies supernatural (but still living) creatures as unknown species, even if they take a human form, unless the mage has studied their kind before. Undead beings do not register to this spell.",
                "practice": "Knowing",
                "withstand": "",
                "name": "Analyze Life",
                "reach": [
                    {
                        "effect": "The player may learn a specific Physical Attribute rating of the subject, rather than the total number of dots.",
                        "cost": 1
                    }
                ],
                "arcanum": "Life",
                "dots": 1,
                "suggestedRotes": "Animal Ken, Medicine, Survival",
                "cost": ""
            },
            {
                "reach": [
                    {
                        "effect": "The subject may make her next resistance roll immediately, in addition to the one she would receive at its regular interval.",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Athletics, Medicine, Survival",
                "practice": "Compelling",
                "name": "Cleanse the Body",
                "arcanum": "Life",
                "cost": "",
                "withstand": "",
                "primaryFactor": "Potency",
                "description": "     The mage can use this spell to help the subject’s body fight the effects of any toxin in her system, or even purge them completely. Its magic allows her a bonus equal to Potency to her next roll to resist the toxin’s effects.",
                "dots": 1
            },
            {
                "practice": "Unveiling",
                "cost": "",
                "primaryFactor": "Duration",
                "suggestedRotes": "Empathy, Investigation, Survival",
                "dots": 1,
                "arcanum": "Life",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage instinctively knows how to track by scent while this spell is active, making use of her increased olfactory powers."
                    }
                ],
                "name": "Heightened Senses",
                "description": "     While this spell cannot grant a mage new senses, it can heighten her existing ones, including touch. This is a popular spell among hedonistic mages as a result, as well as those who want to revitalize senses dulled by city life. A mage’s strength lies in her preparation and knowledge, after all, and keen senses impart greater information about the world. The spell grants a bonus to Perception rolls equal to its Potency.",
                "withstand": ""
            },
            {
                "withstand": "",
                "cost": "",
                "arcanum": "Life",
                "name": "Speak With Beasts",
                "practice": "Unveiling",
                "dots": 1,
                "description": "     The subject gains the ability to “speak” to any specimens of an animal specified by the mage during casting. She usually speaks to it by making noises similar to its own sounds, but this is not necessary; the subject can speak in her own language and the magic “translates” her words for her. This does not grant her any capability to control a creature, only to understand and be understood by it. Animals have limited ability to understand things that transpire around them, especially as pertains to humans, but the subject gains a bonus to any Animal Ken rolls made with that animal equal to the spell’s Potency. A bird may not understand just why the people went into the house across the street last night, for example, but it could give a general estimate of their number and unusual features like being covered in tattoos (“skin patterns”).",
                "suggestedRotes": "Animal Ken, Empathy, Survival",
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject may communicate with all animals, instead of only a single species."
                    }
                ]
            },
            {
                "practice": "Knowing",
                "reach": [],
                "dots": 1,
                "description": "     By tapping into the pulse of the living world, the mage becomes keenly aware of any living things nearby. She feels their presence by the weight they exert upon the Tapestry, a gravity of the life-force that connects all creatures to the same great cycle. Because the unfiltered sensing of all life might provide a sensory overload, most mages specify certain types of life to detect, such as “humans, insects, and birds” or “only dogs.”\n     After successfully casting this spell, the mage can detect all the specified types of organisms within the spell’s area Scale, or that enter the spell’s area while it remains in effect. By casting on an individual subject or subjects, the spell may be used to scan them for parasites, bacteria, or pregnancy.",
                "cost": "",
                "withstand": "",
                "arcanum": "Life",
                "name": "Web of Life",
                "suggestedRotes": "Investigation, Medicine, Survival",
                "primaryFactor": "Duration"
            },
            {
                "arcanum": "Life",
                "cost": "",
                "suggestedRotes": "Athletics, Medicine, Survival",
                "description": "     With this spell a mage can control her subject’s bodily functions to a degree that would make even the most inwardly-focused monks envious. She can do far more than slow heart rate; she can control her subject’s metabolism, heighten reflexes, and consume less oxygen. For the spell’s Duration, each level of Potency gives one rank in each of the following:\n     Breathing: Each rank slows down the subject’s breathing, halving the amount of oxygen she needs to function normally.\n     Heartbeat: By slowing down the subject’s heartbeat, she can double the interval at which a toxin affects her.\n     Metabolism: Regulating the subject’s metabolism allows her to subsist on half as much food, and doubles the amount of time between checks for deprivation or fatigue.\n     Reflexes: Add +1 to the subject’s Initiative.\n     Scent: The mage can change the subject’s scent to any that her body could naturally produce, eliminating (or increasing) body odors, controlling pheromone release.\n        Each level of Potency also halves the healing time of bashing wounds by controlling internal bleeding, preventing bruises or helping them to heal quickly. With Potency 3, for example, she would recover one bashing wound per minute.",
                "primaryFactor": "Duration",
                "dots": 2,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject also gains 1/0 armor for the spell’s Duration as her body becomes much more resistant to minor injuries."
                    },
                    {
                        "cost": 2,
                        "effect": "The subject also halves the healing time for lethal damage for each level of Potency."
                    }
                ],
                "name": "Body Control",
                "practice": "Ruling",
                "withstand": ""
            },
            {
                "dots": 2,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "Control Instincts can affect living supernatural creatures."
                    }
                ],
                "suggestedRotes": "Animal Ken, Intimidation, Persuasion",
                "description": "     For all their intellectual powers, humans are animals, too, and animals are governed by instincts. An Apprentice of Life can control these instinctual responses like a puppeteer pulling strings. In so doing she can make any animal or plant behave in any fashion natural to its type. She need not do so in the presence of circumstances that would provoke such behavior normally. A raging bear can be made to flee by manipulating its fight-or-flight response, a fish to leap, a rat to feast on something, or a snake made to secrete venom from its fangs, even in the absence of prey. A human may be made tired, hungry, or pumped with adrenaline. This spell works on any mundane life-form the mage can perceive. Humans with Supernatural Merits count as “mundane” enough for this spell to affect them.\n     Subjects suffer a Condition appropriate to the desired instinctive response. Use the guidelines for creating a Condition in the section on Creative Thaumaturgy (p. 126) and the Storytelling chapter (p.289).",
                "arcanum": "Life",
                "practice": "Ruling",
                "name": "Control Instincts",
                "primaryFactor": "Duration",
                "cost": "",
                "withstand": "Composure"
            },
            {
                "name": "Lure and Repel",
                "practice": "Ruling",
                "suggestedRotes": "Animal Ken, Persuasion, Survival",
                "withstand": "Resolve",
                "cost": "",
                "description": "     The mage can create a magical lure or repellant for specific types of organisms. While the mage could in theory specify any type of organism, she is likely to be quickly overwhelmed by numbers. When casting this spell as a lure, a smart mage will specify only certain types of organisms (not microscopic ones, if she’s smarter still) to draw to her. Plants and microorganisms have Resolve 0 for purposes of Withstanding the spell. Organisms drawn in are not necessarily friendly and will remain cautious or even hostile if it is within their nature to do so, but will not openly attack the subject unless cornered. People affected by the spell find the subject irresistible or repugnant, but can’t pinpoint just what it is that provokes the reaction.\n     Repelling a type of organism means that such creatures must Withstand the spell’s effect to enter the area of effect Scale factor. The spell doesn’t so much physically repel the creature as trigger an instinctive aversion to the area, like animals fleeing a region before disaster strikes.1",
                "primaryFactor": "Duration",
                "dots": 2,
                "arcanum": "Life",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The lured creatures prove benign toward the subject and will offer food or small favors as appropriate."
                    },
                    {
                        "effect": "Lured intelligent creatures treat the subject as having a good (lure) or bad (repel) first impression for purposes of Social maneuvering.",
                        "cost": 1
                    }
                ]
            },
            {
                "name": "Mutable Mask",
                "withstand": "Stamina",
                "arcanum": "Life",
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "cost": 2,
                        "effect": "The mage can duplicate the appearance of a specific person, including scars and fingerprints."
                    }
                ],
                "practice": "Veiling",
                "suggestedRotes": "Medicine, Stealth, Subterfuge",
                "description": "     The mage may alter her subject’s apparent features, albeit only cosmetically and temporarily. She can change skin pigments, phenotypical features, apparent sex, or hair color and texture; add or subtract small fat deposits; or change the sound of the subject’s voice. Distinguishing features like scars and moles can be added or removed. Even at its most extreme, the changes wrought by this spell still leave the subject somewhat resembling her original form. If someone were to compare the masked and regular appearances side by side, they might notice an almost familial resemblance (even if the two are of obviously different races), but the changes are enough to fool facial recognition devices, sketch artists, or even change the subject’s scent enough to throw off tracking animals. Some biometric devices, such as fingerprint scanners, will still detect the difference. She cannot mimic specific people with this basic spell.\n     The changes brought on by this spell are illusionary, and some supernatural powers (including Life Mage Sight) may see through them with a successful Clash of Wills",
                "dots": 2,
                "cost": ""
            },
            {
                "primaryFactor": "Potency",
                "name": "Purge Illness",
                "practice": "Ruling",
                "reach": [],
                "description": "     A mage with this spell can purge her subject’s body of diseases. Compare Potency to the severity level of the infirmity (p. 223). If Potency is less than the illness’ rating, reduce it by the difference, and if greater, the spell eliminates the illness from the subject entirely.",
                "withstand": "",
                "cost": "",
                "suggestedRotes": "Athletics, Medicine, Survival",
                "arcanum": "Life",
                "dots": 2
            },
            {
                "withstand": "",
                "cost": "",
                "dots": 3,
                "suggestedRotes": "Brawl, Intimidation, Medicine",
                "practice": "Fraying",
                "primaryFactor": "Potency",
                "name": "Bruise Flesh",
                "description": "     A mage can use Life magic to simply bruise and batter a living creature. This is an attack spell, inflicting bashing damage equal to the spell’s Potency.",
                "arcanum": "Life",
                "reach": [
                    {
                        "effect": "The spell also inflicts an additional –1 wound penalty on top of any suffered by the target as the mage triggers nerves and blocks endorphins.",
                        "cost": 1
                    }
                ]
            },
            {
                "arcanum": "Life",
                "description": "     Living things grow feeble when wracked with injury, disease, or genetic defect. This spell replicates those effects, crippling the subject’s Physical Attributes. Each level of Potency reduces Strength, Dexterity, or Stamina by one, chosen when the spell is cast, to a minimum of 1.",
                "suggestedRotes": "Brawl, Medicine, Survival",
                "name": "Degrading the Form",
                "cost": "",
                "withstand": "Stamina",
                "primaryFactor": "Duration",
                "dots": 3,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The spell affects an additional Attribute, dividing the spell’s Potency between both. This effect may be applied twice to affect all three Attributes."
                    }
                ],
                "practice": "Fraying"
            },
            {
                "name": "Honing the Form",
                "withstand": "",
                "practice": "Perfecting",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The spell affects an additional Attribute, dividing the spell’s Potency between both. This effect may be applied twice to affect all three Attributes."
                    },
                    {
                        "effect": "By spending a point of Mana, the mage may raise an Attribute above the maximum rating for the subject.",
                        "cost": 1
                    }
                ],
                "arcanum": "Life",
                "dots": 3,
                "cost": "",
                "primaryFactor": "Duration",
                "description": "     The mage may improve the subject’s Physical Attributes. The spell increases Strength, Dexterity, or Stamina (chosen when the spell is cast) by its Potency. This increase affects any Advantages or other traits derived from the Attribute’s level. The effects are subtle in appearance; the affected target doesn’t grow or gain any obvious muscle mass, but observers can detect even subtle hints of changes to balance, strength, or stamina. The affected Attribute cannot be raised above the subject’s maximum Attribute dots (5 for normal human beings).",
                "suggestedRotes": "Athletics, Medicine, Surviva"
            },
            {
                "dots": 3,
                "withstand": "",
                "description": "     The mage can heal her subject’s body of injuries it would be capable of healing itself given time, and repair damage done by toxins or deprivation (though such damage will continue to accrue as normal unless prevented by other means). Each level of Potency heals two boxes of bashing damage.",
                "reach": [
                    {
                        "effect": "the spell heals one lethal damage per Potency instead of two bashing.",
                        "cost": 1
                    },
                    {
                        "effect": "The mage may heal Personal Tilts such as Arm Wrack, forcing broken bones back into shape.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The spell heals damage done by deprivation and charges the subject’s system as though she had received a full meal and plenty of water."
                    },
                    {
                        "cost": 1,
                        "effect": "The spell reproduces the effects of a full night’s rest in the subject, including regaining a point of Willpower if applicable."
                    }
                ],
                "arcanum": "Life",
                "cost": "",
                "practice": "Perfecting",
                "primaryFactor": "Potency",
                "name": "Knit",
                "suggestedRotes": "Empathy, Medicine, Survival"
            },
            {
                "description": "     The mage may alter her subject’s body in any way, within the confines of species and age. Rather than an illusion as with “Mutable Mask,” the transformation caused by this spell is entirely physical and functional — subjects can be made fertile in their new forms, be granted radically altered weight and fitness, and have poor vision or other senses corrected. If the subject is missing organs or limbs, however, they remain gone in the new form, and injuries carry over from one form to the next. The mage may rearrange up to the spell’s Potency in Physical Attribute dots, for example moving a dot of Strength to Stamina, but cannot change the total number of dots, bring any to 0, or raise them above the subject’s limit.\n     Add Time * * * : The mage may change the subject’s physical age as well.",
                "name": "Many Faces",
                "suggestedRotes": "Medicine, Stealth, Subterfuge",
                "primaryFactor": "Duration",
                "withstand": "Stamina",
                "cost": "",
                "reach": [],
                "dots": 3,
                "practice": "Weaving",
                "arcanum": "Life"
            },
            {
                "reach": [
                    {
                        "cost": 2,
                        "effect": "The bestowed traits, if made indefinite, can be passed on to the creature’s descendants."
                    }
                ],
                "arcanum": "Life",
                "practice": "Weaving",
                "withstand": "Stamina",
                "suggestedRotes": "Animal Ken, Science, Survival",
                "name": "Transform Life",
                "primaryFactor": "Potency",
                "cost": "",
                "description": "     The mage can transform life by giving it features normally exhibited by other organisms. She can grant herself claws or gills, change a harmless herbivore into a venom-spitting killer, or impart limbs and air-breathing lungs to a shark, among oth￾er changes. She may grant one feature per level of Potency. A transformed target instinctively knows how to use its new aspects to the best of its ability. The magic is capable of affecting even microscopic organisms, if the mage can perceive them, but for 151 life obvious reasons most microbes cannot benefit from aspects like armor, limbs, or senses. The mage can grant viruses and bacteria increased Toxicity, or the ability to replicate or survive in environments that might otherwise kill them.\n     Because of the sheer variety of adaptations displayed by the world’s flora and fauna, the following is not an exhaustive list, but serves as an example for possible traits:\n     Claws: The subject gains savage claws, granting her a +1 weapon bonus.\n     Environmental Adaptation: Like creatures adapted for life deep underwater or inhospitable deserts, the subject gains the ability to survive pressure, extreme heat or cold (up to level 4 environments), and arid or moisture-heavy environments.\n     Gills/Lungs: The subject may breathe underwater (or in air, if normally aquatic) freely.\n     Immunities: The mage may grant resistance to toxins or poisonous materials, like a rat’s ability to devour even rotten food unharmed or herbivores’ ability to fully digest plant matter.\n     Leaping: Gaining powerful legs like a frog’s or kangaroo’s, the target gains a bonus to jumping rolls, increasing the distance leaped by each success on the Athletics roll.\n     Prehensile Tail: Gain a bonus to rolls related to balance or climbing equal to Potency.\n     Scaly Armor/Thick Hide: The subject gains 2/1 armor (must be at least Size 2).\n     Senses: The subject gains a new sense, such as echolocation, primitive infravision, or a keen sense for vibrations, granting a bonus to Perception rolls and the ability to perceive phenomena outside the human senses.\n     Tentacles: The subject may make grappling attempts against targets up to her Size in feet away.\n     Venom: The subject gains fangs or small stingers (damage bonus 0) capable of injecting venom with a Toxicity equal to the spell’s Potency. Must grapple first unless a second level of this adaptation is taken. If taken with Tentacles, the Venom may be delivered automatically by any successful move during a grapple.\n     Wall-Crawling: The subject (which can be no larger than Size 7) gains the ability to climb on surfaces without equipment or even handholds, provided the surface can bear her weight.",
                "dots": 3
            },
            {
                "arcanum": "Life",
                "dots": 4,
                "practice": "Patterning",
                "cost": "",
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "effect": "When the spell’s Duration lapses, its effects wear off at an even greater rate than they took hold, rapidly de-aging the subject within a matter of minutes. This places great stress on the mind and body of the target, requiring a Stamina roll to avoid falling into an induced coma for a number of days equal to Potency. Subjects that have been aged to death do not return to life when they de-age, instead appearing to be their original age and yet having died of natural causes.",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Animal Ken, Medicine, Science",
                "name": "Accelerate Growth",
                "description": "     With this spell a mage can greatly accelerate the growth of a living being. The subject’s growth rate doubles for each level of Potency. At Potency 5, the subject grows 32 times faster than normal — a human infant would reach adulthood in a little over half a year, if the spell’s Duration lasts long enough. When the spell expires, the subject returns to its actual age. The targets gain no life experience beyond that which they undergo during the spell’s Duration, so a human child made into an adult by means of this spell will likely behave as a child unless other magic helps him learn quickly, and the mage or someone else sees fit to teach him. If the subject exceeds its natural lifespan, it dies of old age.",
                "withstand": "Stamina"
            },
            {
                "practice": "Patterning",
                "suggestedRotes": "Animal Ken, Science, Survival",
                "cost": "",
                "primaryFactor": "Duration",
                "dots": 4,
                "arcanum": "Life",
                "withstand": "Stamina",
                "name": "Animal Minion",
                "reach": [
                    {
                        "effect": "The target behaves more normally as the mage gains an understanding of its normal movements, bodily tics, and habits.",
                        "cost": 1
                    }
                ],
                "description": "     Rather than triggering instincts and directing an animal along a course it might normally take, an Adept can take full bodily control. She does so with raw domination, a puppetmaster commanding a marionette. While she can’t force the creature to do something outside its physical capabilities, she can make it do anything of which its body is capable. This isn’t full mind control and she doesn’t have access to the creature’s thoughts. The mage can force an human subject to talk, but can’t prompt it to divulge specific information, or even anything intelligible (unless the mage herself demands that it speak certain words). Subjects often move differently from their usual gait in ways noticeable to those familiar with them.\n     Using this spell renders the mage’s own body inert for the Duration, as she concentrates everything on controlling another’s every bodily function. Her body continues to breathe, tire, and age as normal, but she loses her Defense and remains only semi-aware of what transpires around her body. Damage inflicted on her body will immediately alert her to the threat and she may choose to end control of her puppet-body in order to regain full control of her own.\n     Unlike Control Instincts (Life --, p. 149), this spell allows the mage to command the subject completely. It is not simple instinctive responses and triggered urges, but a total bodily takeover that allows her to do anything the possessed body could normally do"
            },
            {
                "description": "     The mage attacks the very life energies that sustain a living Pattern. This involves rending that Pattern, causing horribly painful internal wounds and unspecific tissue damage. This is an attack spell, inflicting lethal damage equal to its Potency.",
                "cost": "",
                "reach": [
                    {
                        "effect": "The mage can damage and destroy nerves, leaving some affected body parts numb and others crippled with incredible pain. Increase wound penalties suffered by the target by 2.",
                        "cost": 1
                    },
                    {
                        "effect": "The spell’s damage is aggravated (cost: 1 Mana.)",
                        "cost": 1
                    }
                ],
                "dots": 4,
                "practice": "Unraveling",
                "primaryFactor": "Potency",
                "suggestedRotes": "Brawl, Intimidation, Medicine",
                "withstand": "",
                "name": "Life-Force Assault",
                "arcanum": "Life"
            },
            {
                "suggestedRotes": "Empathy, Medicine, Survival",
                "reach": [
                    {
                        "effect": "The mage can erase scars left by previous injuries or the wounds healed by this spell.",
                        "cost": 1
                    },
                    {
                        "effect": "The spell heals damage done by deprivation and charges the subject’s system as though she had received a full meal and plenty of water.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The spell reproduces the effects of a full night’s rest in the subject, including regaining a point of Willpower if applicable."
                    },
                    {
                        "effect": "The spell heals aggravated damage. Cost: 1 Mana",
                        "cost": 1
                    }
                ],
                "practice": "Patterning",
                "name": "Mend",
                "description": "     Adepts of Life can heal even the most grievous wounds, rewriting the subject’s body to seal injuries shut. Each level of Potency heals two lethal damage.",
                "primaryFactor": "Potency",
                "withstand": "",
                "cost": "",
                "arcanum": "Life",
                "dots": 4
            },
            {
                "primaryFactor": "Duration",
                "reach": [],
                "cost": "1 Mana",
                "withstand": "",
                "name": "Regeneration",
                "dots": 4,
                "practice": "Patterning",
                "suggestedRotes": "Athletics, Medicine, Survival",
                "description": "     Life magic can regenerate lost organs, limbs, repair fire-scarred tissue, and restore function to dead tissues, provided the subject is still alive when the spell is cast. This spell can even cure brain damage, infertility, and birth defects. Potency determines the extent of the organs that may be regenerated. Affected body parts regenerate (growing from nothing if the limb or organ has been completely removed) at a rate of about one minute per level of Potency required.\n     Most mages cast this spell with a Duration of Indefinite, but some either can’t or don’t — keeping a target dependent upon her magic for brain function or a healthy, fully-functional body is a powerful bargaining chip. When the spell expires, the regenerated tissues wither away in less than a minute.\n     Digits, skin (patch) - 1 \n     Eyes, ears, nose, tongue - 2 \n     Hand, foot - 3 \n     Arm, leg - 4 \n     Genitals, internal organs - 5 \n     Heart, skin (most) - 6 \n     Brain - 7",
                "arcanum": "Life"
            },
            {
                "dots": 4,
                "cost": "",
                "practice": "Patterning",
                "suggestedRotes": "Animal Ken, Athletics, Science",
                "primaryFactor": "Duration",
                "withstand": "Stamina",
                "arcanum": "Life",
                "description": "     The mage (or her subject) can fully take on the form of another creature. While the spell can greatly transform its subject’s Size, changing into much larger forms is difficult. The Scale factor of the spell must cover the larger of the Size traits, before and after the transformation.\n     The subject’s clothes and gear do not change, and she must also contend with powerful instincts in the animal form. When confronted by circumstances that would trigger a strong instinctive response, such as a male lion’s need to kill all competitors’ cubs, or if the subject is hungry in bear form and faced with a prey animal, she must roll Composure + Resolve reflexively to avoid acting on these impulses. Failure means that she gives in to the primal urges until they’re satisfied. Mages add Gnosis to this roll, and other supernatural beings add their own Tolerance Traits.\n     Add Matter * * * *: The subject’s gear changes to fit her new form.",
                "name": "Shapechanging",
                "reach": [
                    {
                        "effect": "(with Matter * * * *): The subject’s gear becomes part of her new form, taking on appearance as odd scars, fur, or scales.",
                        "cost": 1
                    },
                    {
                        "effect": "The subject takes on a swarm form and maintains control of hundreds or thousands of tiny creatures. See the sidebar on p. 151.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The subject retains full control of her reason and doesn’t have to fight instinctive urges."
                    }
                ]
            },
            {
                "name": "Contagion",
                "dots": 5,
                "reach": [
                    {
                        "effect": "The caster may create a new disease with new characteristics and loose it upon the world. This is almost always an Act of Hubris. Because no living creature could have possibly encountered the disease and developed any resistance to it, all contested rolls to resist contracting it or fight its effects suffer a –5 penalty.",
                        "cost": 1
                    }
                ],
                "primaryFactor": "Potency",
                "suggestedRotes": "Medicine, Occult, Science",
                "description": "     Life Masters can unleash horrific plagues on their foes. The mage can create minor sicknesses or life-threatening diseases. The Severity of the disease is equal to Potency. If the mage has something in which she can store the disease, she can create it within that equipment, or else she must target some form of carrier, depending on the disease’s transmission methods (water, food, living hosts). It’s contagious as soon as the mage creates it, requiring a reflexive Stamina + Resolve roll, modified by the Severity, to resist contracting it. Failure means the victim contracts the disease and suffers its normal effects.",
                "practice": "Making",
                "arcanum": "Life",
                "cost": "",
                "withstand": ""
            },
            {
                "reach": [
                    {
                        "effect": "The organism may be created with additional features for every level of Potency above the base required, as per Transform Life (see p. 150).",
                        "cost": 1
                    }
                ],
                "dots": 5,
                "primaryFactor": "Duration",
                "cost": "",
                "description": "     A Master of Life may create a new living organism of nearly any variety: plant, fungus, animal, even complex organisms like humans and cetaceans. The created being is mindless without the conjunctional use of the Mind Arcanum to give it intelligence, acting purely upon instinct. It will be a simple creature, even for its kind, but otherwise fully functional and even capable of procreation.\n     What a mage can create is limited by little other than her imagination, though truly fantastical creatures are beyond the scope of this spell. She cannot create a winged dragon, for instance, and expect it to fly in defiance of physics. The Size of Target Scale factor determines the maximum Size of the created organism. The creation has all the basic characteristics of an organism of its type; the mage need not impart the ability to breed or move in ways normal to that species.\n     When the spell’s Duration expires, so does the created organism, which may count as an Act of Hubris against Enlightened Wisdom. Simply creating the living creature knowing this may also count as an Act of Hubris. Some mages use this spell to create bodies they can possess or alter with other Life magic, use to bribe spirits looking for a host body, or create a companion (often done with an Indefinite Duration). Created human bodies are soulless and thus immediately gain the Soulless Condition (see p. 318).\n     Add Mind * * * * *: The caster gives her creation a true mind as appropriate for the organism’s type.",
                "name": "Create Life",
                "suggestedRotes": "Medicine, Science, Survival",
                "practice": "Making",
                "arcanum": "Life",
                "withstand": ""
            },
            {
                "arcanum": "Life",
                "primaryFactor": "Duration",
                "name": "Salt the Earth",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "Individual living things that survive the assault on their vitality will find themselves unable to grow or heal naturally, and suffer an additional –1 from any wound penalties they currently bear."
                    }
                ],
                "suggestedRotes": "Medicine, Science, Survival",
                "withstand": "",
                "description": "     This destructive spell rips the very life-force from an area or an individual, rendering it incapable of sustaining life. Plants, animals, and even fungi in the area die. The use of this spell even temporarily halts decomposition in an area based upon microbial breakdown of dead cells, as it kills all microscopic organisms as well. Finally, the spell prevents anything affected from becoming fertilized, though existing pregnancies stay if the organism survives. The spell creates an Extreme Environment effect equal to Potency.",
                "dots": 5,
                "practice": "Unmaking",
                "cost": ""
            }],
            matter: [{
                "reach": [
                    {
                        "effect": "The subject’s senses expand to an understanding of how to use the examined object. Not only does this reveal things like the combination to a safe or the solution to a puzzle, it grants the subject 8-Again on all actions made using the studied object for its intended purpose. Only the most recently studied object gains this benefit.",
                        "cost": 1
                    },
                    {
                        "effect": "As above, plus the spell reveals all potential uses of an object, fanned out in a vast array of Supernal symbols around the object. Focusing on a particular use might require a reflexive Wits + Composure roll for especially complex items.",
                        "cost": 2
                    }
                ],
                "practice": "Knowing",
                "dots": 1,
                "name": "Craftsman’s Eye",
                "suggestedRotes": "Crafts, Investigation, Science",
                "primaryFactor": "Duration",
                "description": "     Under the craftsman’s eye, no tool is mysterious. By studying an object for one turn, the subject gains a complete understanding of the object’s intended function. From a tool as simple as a hammer to an intricate puzzle box, the item’s intended purpose is plain to see. If the object has no purpose (for example, a simple rock), the spell reveals that too. Likewise, if something prevents the object from fulfilling its purpose (for example, a car missing its spark plugs can’t drive), the spell reveals the nature of the problem.\n     Add Fate *: The mage names a particular task when casting the spell (e.g. “get leverage on Carruthers,” “translate the Codex Afire”). Any object that might help with that task seem to loom larger, to be more physically present, and are immediately obvious to the subject as soon as she lays eyes on them.",
                "cost": "",
                "withstand": "",
                "arcanum": "Matter"
            },
            {
                "description": "     The mage chooses a number of substances or objects that fall under Matter’s purview equal to the spell’s Potency. As long as this spell is active, the subject is automatically aware of the presence and location of the chosen substance within the area of effect. The chosen substance can be as broad or as specific as the mage likes (“ferrous metal,” “stainless steel,” “a knife,” and “my hunting knife” are all valid options).\n     Add Time *: The subject can detect whether the chosen substance has been in the area within an amount of time equal to the spell’s Duration.\n     Add Forces *: The subject can search for specific types of electronic information, such as digital audio, photographs, or text documents. Not only will the spell reveal which devices have the chosen file type on board, if she’s actually using the device the mage knows where on the device the files are stored.",
                "cost": "",
                "suggestedRotes": "Crafts, Investigation, Science",
                "practice": "Unveiling",
                "name": "Detect Substance",
                "dots": 1,
                "reach": [],
                "primaryFactor": "Duration",
                "arcanum": "Matter",
                "withstand": ""
            },
            {
                "dots": 1,
                "name": "Discern Composition",
                "arcanum": "Matter",
                "suggestedRotes": "Crafts, Investigation, Science",
                "withstand": "",
                "primaryFactor": "Potency",
                "cost": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject also becomes aware of any objects concealed within the object: a gold relic hidden in a secret compartment in a stone statue, for example."
                    },
                    {
                        "effect": "The subject instinctively knows the object’s structural weak point. Attempts to damage the object reduce its Durability by –1 per point of the spell’s Potency. This benefit lasts until the object is destroyed or fully repaired.",
                        "cost": 1
                    }
                ],
                "practice": "Knowing",
                "description": "     The subject becomes aware of the precise composition of an object: its weight and density, as well as the precise elements that make it up.\n     Add Space * *: The subject is aware not only of what the object is made of, but of precisely where the material came from (e.g. where the ore was mined, where the tree that made the board was felled, or where the circuit board was manufactured). Casting this spell on a Supernal Artifact strikes the subject with an overwhelming rush of images and symbols: Roll the Artifact’s dot rating, contested by the subject’s Gnosis. If the Artifact earns more successes, the subject gains the Shaken Condition. Resolving the Condition grants an Arcane Beat."
            },
            {
                "suggestedRotes": "Crafts, Larceny, Science",
                "practice": "Compelling",
                "reach": [],
                "name": "Lodestone",
                "description": "     The mage chooses a substance or type of object. As long as the spell remains active, those objects within the spell’s Area are drawn to the spell’s subject: Dropped coins bounce toward her, water flows in her direction as long as she’s standing downstream, and so on. Unless the object is capable of moving under its own power, this spell can only nudge the object when an external force is imparted on it: a ball might roll across the floor, but a heavy book won’t fly off a table into the subject’s hand. (It might, however, tip and fall off a shelf if it was precariously balanced to begin with.)\n     Alternately, the mage can repel objects from the subject in the same fashion. This spell isn’t strong enough to deflect a weapon swung or fired with intent to harm, but it can certainly keep the mage dry in a rainstorm or keep a cloud of tear gas at bay.",
                "withstand": "",
                "primaryFactor": "Duration",
                "dots": 1,
                "arcanum": "Matter",
                "cost": ""
            },
            {
                "withstand": "",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject can perform more complex tasks while controlling the object, including extended actions or maintaining continuous control of the object as long as the spell’s Duration lasts."
                    }
                ],
                "suggestedRotes": "Crafts, Drive, Intimidate",
                "description": "     With the commanding power of Stygia, the subject can control any mechanical object, making it fulfill its function. She might flip a light switch, cause an industrial press to slam downward, or shift a car into gear. Anything that’s within the bounds of a single instant action, and which the subject device is capable of performing, is fair game. Should the action require a Skill roll, treat the spell’s Potency as its successes.",
                "name": "Remote Control",
                "practice": "Compelling",
                "cost": "",
                "arcanum": "Matter",
                "dots": 1
            },
            {
                "dots": 2,
                "practice": "Shielding",
                "cost": "",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage chooses another form of matter the spell protects against"
                    },
                    {
                        "effect": "The mage is immune to bashing and lethal damage from the material, and reduces any aggravated damage by the spell’s Potency.",
                        "cost": 2
                    }
                ],
                "suggestedRotes": "Crafts, Survival, Persuasion",
                "withstand": "",
                "description": "     Draped in the leaden shrouds of Stygia, the subject may handle even the most dangerous of substances without fear. When the spell is cast, the mage chooses a particular form of matter: The subject is largely immune to its deleterious effects. The material cannot inflict bashing damage on her at all, and she reduces the damage from lethal sources of harm by the spell’s Potency. The spell has no effect on aggravated damage.\n     This spell only protects the mage from harm that comes due to an intrinsic property of the material. The damage from a gun or a sword, for example, comes from the force behind the impact and thus isn’t reduced by this spell. However, a mage under the protection of this spell can handle radioactive or caustic substances or walk through a cloud of chlorine gas with no ill effects.\n     Add Forces * *: The subject is protected from extreme temperatures caused by the substance’s state. She can walk across lava, scoop up a handful of molten steel without being burned, or dip a finger in liquid nitrogen without it freezing.",
                "name": "Alchemist’s Touch",
                "arcanum": "Matter"
            },
            {
                "primaryFactor": "Duration",
                "arcanum": "Matter",
                "reach": [
                    {
                        "effect": "The tool grants the 8-Again quality instead.",
                        "cost": 1
                    }
                ],
                "dots": 2,
                "name": "Find the Balance",
                "practice": "Ruling",
                "suggestedRotes": "Crafts, Persuasion, Science",
                "withstand": "",
                "description": "     Those initiated into the Stygian Mysteries know that understanding a tool is only the first step toward perfecting it. By subtly manipulating the density and purity of a tool, the mage improves its balance and heft. The tool grants its user the 9-Again quality for the Duration of the spell, so long as it’s a tool that can benefit from balance or weight distribution.",
                "cost": ""
            },
            {
                "practice": "Veiling",
                "arcanum": "Matter",
                "description": "     This spell renders Matter difficult to detect. It isn’t invisibility, precisely; rather, the spell veils the subject’s connection to the Supernal truths, making it seem insignificant and beneath notice. Mundane attempts to detect the subject fail automatically. Spells and powers that would detect the veiled object are subject to a Clash of Wills.",
                "cost": "",
                "dots": 2,
                "withstand": "",
                "primaryFactor": "Duration",
                "name": "Hidden Hoard",
                "suggestedRotes": "Larceny, Occult, Subterfuge",
                "reach": []
            },
            {
                "suggestedRotes": "Larceny, Science, Stealth",
                "dots": 2,
                "reach": [
                    {
                        "effect": "This spell also applies to unliving constructs animated with magic, including zombies and golems. Such beings always provoke a Clash of Wills.",
                        "cost": 1
                    }
                ],
                "cost": "",
                "arcanum": "Matter",
                "withstand": "",
                "name": "Machine Invisibility",
                "practice": "Veiling",
                "primaryFactor": "Duration",
                "description": "     By means of this spell, the mage blinds the eyes and ears of inert matter to her subject’s presence: cameras refuse to see her, microphones refuse to hear her voice, and so on. Supernatural objects (such as remote-viewing Artifacts or perhaps a ghost-haunted camera) provoke a Clash of Wills"
            },
            {
                "description": "     Liquids, gases, and amorphous solids are the mage’s playthings with this spell. She can shape them into any form she desires, manipulating them in defiance of gravity, for as long as the spell lasts. This spell cannot change the state of matter (e.g. from solid to liquid), but substances that have been temporarily transformed into shapeable states by magic may be affected. Particularly intricate shapes may require a reflexive Wits + Crafts roll, at the Storyteller’s discretion.",
                "name": "Shaping",
                "primaryFactor": "Potency",
                "dots": 2,
                "cost": "",
                "reach": [
                    {
                        "effect": "The mage can alter the shape of solid substances as well. If used to warp a tool or weapon, each point of Potency reduces the subject’s equipment bonus or damage by –1. If the equipment bonus or damage is reduced to 0, the object is useless.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The mage can alter the shape of solid substances as well. If used to warp a tool or weapon, each point of Potency reduces the subject’s equipment bonus or damage by –1. If the equipment bonus or damage is reduced to 0, the object is useless. +1 Reach: If the mage is creating or repairing an object using this spell, reduce the number of successes required on the extended action by one per point of Potency. This can’t reduce the number of required successes below one. +2 Reach: The mage can create an appropriate Environmental Tilt, such as Earthquake, Flooded, or Heavy Winds."
                    },
                    {
                        "cost": 2,
                        "effect": "The mage can create an appropriate Environmental Tilt, such as Earthquake, Flooded, or Heavy Winds."
                    }
                ],
                "practice": "Ruling",
                "arcanum": "Matter",
                "suggestedRotes": "Crafts, Expression, Persuasion",
                "withstand": "Durability"
            },
            {
                "suggestedRotes": "Athletics, Crafts, Science",
                "description": "     By adjusting the properties of matter, the mage may make silk shirts bullet-proof, or tear through bulky riot suits with her bare hands. The spell is cast upon a wearable object (giving living beings Armor is a function of Life). For each level of Potency, the player chooses one of the following effects: \n     - Raise or lower ballistic Armor rating by 1 \n     - Raise or lower general Armor rating by 1 \n     - Raise or lower Defense penalty by 1",
                "practice": "Weaving",
                "cost": "",
                "name": "Aegis",
                "dots": 3,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The armor becomes immune to the Armor-Piercing effect."
                    }
                ],
                "primaryFactor": "Duration",
                "withstand": "",
                "arcanum": "Matter"
            },
            {
                "cost": "",
                "name": "Alter Conductivity",
                "dots": 3,
                "description": "     With this spell, the mage alters a subject’s base properties, changing the manner in which it conducts electricity. This spell can automatically shut down any electrical device whose power isn’t great enough to inflict damage, or it can increase or decrease the amount of electricity that can flow through the object. For each level of Potency, the spell allows the object to conduct two points worth of electrical damage, or reduces electrical damage by two. The object must still be in contact with an appropriate source of electricity to deal this damage; even a Potency 6 spell won’t let the power from a household wall outlet inflict more than four points of bashing damage (see Electricity on p. 224). Reducing electrical damage to zero also shuts electrical devices down — for example, completely snuffing a subway rail’s conductivity shuts the trains down.",
                "practice": "Weaving",
                "arcanum": "Matter",
                "primaryFactor": "Potency",
                "suggestedRotes": "Computers, Science, Subterfuge",
                "withstand": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage can alter the subject’s ability to transmit other forms of energy, such as heat, sound, or even light. Each additional form of energy is an extra Reach."
                    }
                ]
            },
            {
                "withstand": "Durability",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "In lieu of increasing Durability, one level of Potency may be “spent” to give the object 2 additional points of Structure. If the spell wears off and the object has taken more damage than it has Structure, it crumbles to dust. +2 Reach: The effect is Lasting"
                    },
                    {
                        "cost": 2,
                        "effect": "The effect is Lasting"
                    }
                ],
                "arcanum": "Matter",
                "name": "Alter Integrity",
                "practice": "Fraying or Perfecting",
                "description": "     By rotating an object’s resonance into or out of alignment with Stygian truths, the mage can strengthen or weaken its material. 157 matter Every level of Potency either increases or decreases the object’s Durability by 1. This does not increase the object’s Structure, but see below.",
                "dots": 3,
                "cost": "",
                "primaryFactor": "Potency",
                "suggestedRotes": "Crafts, Medicine, Subterfuge"
            },
            {
                "withstand": "",
                "reach": [
                    {
                        "effect": "For one point of Mana, the object grants the rote action quality on a number of rolls equal to the spell’s Potency. As long as the spell’s Duration lasts, its wielder may spend one point of Mana at any time to “recharge” this effect, granting the rote action quality on an additional number of rolls equal to the spell’s Potency.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The spell may increase the object’s Availability to three times its original rating."
                    }
                ],
                "practice": "Perfecting",
                "cost": "",
                "dots": 3,
                "name": "Crucible",
                "arcanum": "Matter",
                "primaryFactor": "Potency",
                "description": "     With this spell, an object takes on a glimmer of Supernal purity. If its primary purpose is as a tool, it grants 8-Again on a number of rolls equal to the spell’s Potency. Valuable objects, such as gold or diamonds, become incredibly pure and beautiful. Add the spell’s Potency to the object’s Availability rating to determine its increased value. This spell cannot increase an object’s Availability to more than twice its original rating.",
                "suggestedRotes": "Crafts, Occult, Science"
            },
            {
                "practice": "Fraying or Perfecting",
                "name": "Nigredo and Albedo",
                "description": "     All matter contains within itself the Supernal Truth of its own perfection — or its annihilation. This spell allows the mage to repair or destroy objects, restoring lost Structure or inflicting damage equal to the spell’s Potency.",
                "withstand": "",
                "reach": [
                    {
                        "effect": "When inflicting damage, ignore the object’s Durability",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Crafts, Brawl, Medicine",
                "arcanum": "Matter",
                "cost": "",
                "primaryFactor": "Potency",
                "dots": 3
            },
            {
                "primaryFactor": "Potency",
                "description": "     By means of this spell, the mage may bring an object’s Supernal reflection closer to the world or push it farther away. This in turn causes the Supernal to cast a larger or smaller shadow into the Fallen World, effectively making the object grow or shrink. Each level of Potency either adds or subtracts one from the subject’s Size. Size 0 objects can be shrunk down to roughly the size of a dime. Add Life * * *: The spell can affect living subjects. Unwilling subjects may Withstand with Stamina.",
                "dots": 3,
                "name": "Shrink and Grow",
                "practice": "Weaving",
                "suggestedRotes": "Crafts, Expression, Science",
                "withstand": "Durability",
                "reach": [],
                "arcanum": "Matter",
                "cost": ""
            },
            {
                "dots": 3,
                "suggestedRotes": "Crafts, Persuasion, Science",
                "withstand": "Durability",
                "description": "     The mage can transmute any inorganic material one “step” along the path from solid to liquid to gas. This magically-induced state change does not change the material’s temperature: liquefied steel remains as cool to the touch as if it were solid, and vaporized ice is still freezing cold. Transforming a liquid or gas into a solid gives the new object a Durability equal to the spell’s Potency; Structure is determined as Durability + Size.\n     When the Duration wears off, the substance returns to its natural state, but keeps the form it held during its altered state. (In the case of materials turned to gas, this often means a fine rain or snow of unusual composition.)\n     Add Forces * * *: The mage may transmute matter into plasma",
                "name": "State Change",
                "primaryFactor": "Duration",
                "cost": "",
                "arcanum": "Matter",
                "practice": "Weaving",
                "reach": [
                    {
                        "effect": "The mage may transform a solid directly into a gas, or a gas directly into a solid.",
                        "cost": 1
                    }
                ]
            },
            {
                "name": "Windstrike",
                "practice": "Weaving",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "effect": "The warped matter of this spell sticks around after casting, creating an Environmental Tilt like Flooded or Heavy Winds in the immediate vicinity.",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Athletics, Brawl, Crafts",
                "dots": 3,
                "arcanum": "Matter",
                "description": "     The very air (or other fluid matter) strikes out against the mage’s enemies. The wind buffets and strikes like a fist, or water lashes out like a whip. This is an attack spell; its damage rating is equal to the spell’s Potency, and it inflicts bashing damage.",
                "withstand": "",
                "cost": ""
            },
            {
                "name": "Wonderful Machine",
                "reach": [],
                "primaryFactor": "Potency",
                "description": "     This spell allows a mage to swiftly superimpose pieces of various objects into one another in such a way as to produce a desired result. With this spell, a mage could, for example, integrate a nail-gun and shotgun together to produce a weapon that fires a barrage of nails with each pull of the trigger.\n     For each level of Potency, the mage may transpose one quality (such as a rotisserie’s generation of heat or its ability to rotate another object within it) from a given mechanical object onto another mechanical object. In the case of combining firearms with other firearms, one weapon characteristic can be swapped out for another (creating a pistol, for example, that uses shotgun shells for ammunition). A firearm can also be incorporated fully into another device, effectively disguising the weapon until it is first used (or it undergoes close mystic or mundane inspection). 158 chapter four: magic\n     Add Life (* * *): The machine properties can be grafted onto a living thing, or vice versa. The mage might, for example, make a bird that can breathe fire or a butane torch that can fly.",
                "withstand": "",
                "dots": 3,
                "practice": "Weaving",
                "cost": "",
                "suggestedRotes": "Crafts, Politics, Science",
                "arcanum": "Matter"
            },
            {
                "description": "     All Fallen Matter is merely a shadow of Supernal truth, and this spell reveals the truth of that axiom. The mage renders a volume of inert matter wholly or partly insubstantial, no more “real” than an illusion. Insubstantial objects remain where they were when transfigured (that is, they don’t fall to the center of the Earth or fly off into space). Objects made insubstantial by this spell aren’t in Twilight, they simply don’t register as “real.”\n     Add Death (* * *), Mind (* * *), or Spirit (* * *): The insubstantial object may be shifted into Twilight, attuned to the used Arcanum.",
                "name": "Ghostwall",
                "arcanum": "Matter",
                "dots": 4,
                "primaryFactor": "Duration",
                "suggestedRotes": "Athletics, Occult, Stealth",
                "cost": "",
                "reach": [],
                "withstand": "",
                "practice": "Patterning"
            },
            {
                "practice": "Patterning",
                "suggestedRotes": "Crafts, Expression, Occult",
                "reach": [],
                "withstand": "",
                "arcanum": "Matter",
                "dots": 4,
                "name": "Golem",
                "cost": "",
                "description": "     This spell animates a statue or other object, allowing it to move and act almost as if it were alive. Each level of Potency effectively grants the mage a dot of the Retainer Merit. The Golem’s “field” includes simple physical labor, combat, and other uncomplicated tasks.\n     The golem is completely mindless, and can only execute whatever order the caster gave it last. Orders must be very simple. If attacked, the golem has no Defense, but has Durability appropriate to its makeup (see Objects on p. 223) and Structure equal to Durability + Size.\n     Add Death 4 or Spirit 4: Bind a ghost or spirit into the golem to serve as an animating intelligence. The golem still uses its Retainer rating to determine dice pools, but the ephemeral being can use any of its powers, and the golem’s “field” is whatever the entity is capable of.\n     Add Mind 5: Create an intelligence from nothing that will guide the golem and inform its “field.” See “Psychic Genesis” on p. 165 for creating a mind from scratch.",
                "primaryFactor": "Potency"
            },
            {
                "suggestedRotes": "Athletics, Brawl, Crafts",
                "reach": [
                    {
                        "effect": "The warped matter of this spell sticks around after casting, creating an Environmental Tilt like Earthquake in the immediate vicinity.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "For one point of Mana, the spell inflicts aggravated damage."
                    }
                ],
                "withstand": "",
                "practice": "Patterning",
                "cost": "",
                "name": "Piercing Earth",
                "description": "     Much like Windstrike (see p. 157), this spell causes inanimate matter to lash out at the subject. But where Windstrike lashes out with air and water, this spell causes the Earth itself to rise up and crush the subject. This is an attack spell; its damage rating is equal to the spell’s Potency, and it inflicts lethal damage.",
                "dots": 4,
                "arcanum": "Matter",
                "primaryFactor": "Potency"
            },
            {
                "withstand": "",
                "dots": 4,
                "arcanum": "Matter",
                "primaryFactor": "Duration",
                "suggestedRotes": "Crafts, Empathy, Science",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may transmute multiple substances into a single substance or vice versa."
                    }
                ],
                "cost": "",
                "practice": "Patterning",
                "name": "Transubstantiation",
                "description": "     The mage can transmute any inert matter into any other form of inert matter: lead into gold, water into wine, wood into chlorine gas, etc. The purity and quality of the transmuted matter is determined by the spell’s Potency: treat Potency as an equipment bonus or equivalent Resource Merit dots for a single purchase, whichever is appropriate. Both the initial substance and the transubstantiated substance must be relatively pure: Wood can be transformed into gold, but not into gold chased with silver. (The Stygian Mysteries teach that “purity” is a perceptual concept — so, for example, even though “wine” and “steel” are made up of numerous compounds, they are concrete enough as concepts to be transmuted).\n     Add Life 4: Transform matter into living things, or transform a living being into inert matter (but see p.127 for rules on permanently transforming someone with magic). Unless the mage also adds Mind 5, any organism created is mindless, driven purely by instinct."
            },
            {
                "name": "Annihilate Matter",
                "dots": 5,
                "primaryFactor": "Potency",
                "suggestedRotes": "Athletics, Intimidation, Science",
                "withstand": "Durability",
                "practice": "Unmaking",
                "cost": "",
                "arcanum": "Matter",
                "description": "     The mage can destroy inert matter, reducing it to nothingness and utterly dissolving its atomic lattice. In effect, he makes it cease to be. Whereas objects destroyed by Nigredo and Albedo (see p. 157) shatter or crumble as appropriate, matter destroyed by this spell is annihilated; nothing remains of it.\n     Magical objects and materials, such as tass or Artifacts, cannot normally be destroyed with this spell.",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "For one point of Mana, the spell can destroy magical objects as well. In this case, the spell is Withstood by the Supernatural Tolerance of the subject or its maker, as appropriate (e.g. the Rank of the spirit bound to a fetish, the Blood Potency of a vampire whose Vitae the mage is trying to destroy, or the Gnosis of the mage who crafted the object). If no such trait applies, use the object’s Durability."
                    }
                ]
            },
            {
                "cost": "",
                "description": "     The mage creates an object out of nothing. The object may be any simple tool or relatively uncomplicated machine (a revolver qualifies, but an automatic handgun is too complex). The object’s size is determined by the Scale factor. The spell’s Potency may be allocated as the mage wishes between Durability or equipment bonus.",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "Create a complex machine or electronic device, like a car or a smartphone. The device must still be something that operates according to known physical principles: no teleporters or warp drives."
                    }
                ],
                "withstand": "",
                "suggestedRotes": "Crafts, Expression, Science",
                "primaryFactor": "Potency",
                "practice": "Making",
                "dots": 5,
                "arcanum": "Matter",
                "name": "Ex Nihilo"
            },
            {
                "cost": "",
                "description": "     This spell imbues an object with a small semblance of life — specifically, the ability to repair itself. As long as the spell lasts, the object heals (Potency) Structure every day.",
                "practice": "Making",
                "withstand": "",
                "arcanum": "Matter",
                "primaryFactor": "Potency",
                "dots": 5,
                "reach": [
                    {
                        "effect": "The machine heals (Potency) Structure every hour.",
                        "cost": 1
                    },
                    {
                        "effect": "The machine heals (Potency) Structure every 15 minutes.",
                        "cost": 2
                    }
                ],
                "suggestedRotes": "Crafts, Medicine, Occult",
                "name": "Self-Repairing Machine"
            }],
            mind: [{
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage can also determine her subject’s Aspirations and Obsessions."
                    },
                    {
                        "effect": "The player may learn a specific Social or Mental Attribute rating of the subject, rather than the total number of dots.",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Empathy, Science, Subterfuge",
                "primaryFactor": "Potency",
                "dots": 1,
                "withstand": "",
                "description": "     By observing her subject, the mage can determine his Virtue, Vice, and how many dots in Mental and Social Attributes he has.",
                "cost": "",
                "name": "Know Nature",
                "arcanum": "Mind",
                "practice": "Knowing"
            },
            {
                "name": "Mental Scan",
                "withstand": "Composure",
                "primaryFactor": "Potency",
                "description": "     By quickly scanning the very surface of a subject’s thoughts, the mage is capable of discerning his mental and emotional state. For each level of Potency, the mage may ask the Storyteller a single question to gain information about the subject’s mental or emotional state. This information comes as flashes of insight from the subject’s thoughts, so the Storyteller should be sure to represent her answers as such.\n     Sample Questions \n     - What is the subject’s current mood? Flashes of being stuck in traffic, or waiting in a long line outside a store. The thought of a serene sunset at the beach. \n     - How intelligent is the subject? Simple flashes of seemingly unrelated images. An image of a complex mathematical theory, or a quote from a piece of well-known literature. \n     - Is the subject supernatural? Thoughts of drinking the life-force from others. The basic shapes of Imagos flashing past. Thoughts that flicker between animalistic and human. \n     - What does the subject most desire? Images of money, a person’s face flashing by, or a flashy car. \n     - What, if any, psychosis does the subject suffer? Thoughts that seem to stem from many sources. Paralyzing fear associated with a specific thought.",
                "suggestedRotes": "Empathy, Investigation, Occult",
                "dots": 1,
                "cost": "",
                "arcanum": "Mind",
                "practice": "Unveiling",
                "reach": [
                    {
                        "effect": "The mage is capable of reading through the surface thoughts of her subject, reading snippets of ideas and catching the words and phrases before he says them. The mage cannot scan deeper than whatever the subject is thinking of right at this moment, but through conversation she can direct the subject’s thoughts to specific topics.",
                        "cost": 1
                    }
                ]
            },
            {
                "description": "     The subject may hold two individual and wholly distinct trains of thought at once, as long as neither is physically demanding. She can perform two separate Mental or Social extended tasks at the same time. Neither task can be a purely Physical task, but the subject can carry on a conversation while composing a sonnet, or write a poem while researching scientific discoveries. 160 chapter four: magic The subject is incapable of multitasking spells, as they are more than just an exercise of consciousness.",
                "cost": "",
                "arcanum": "Mind",
                "practice": "Compelling",
                "name": "One Mind, Two Thoughts",
                "primaryFactor": "Duration",
                "suggestedRotes": "Academics, Expression, Science",
                "dots": 1,
                "withstand": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject may perform two separate Mental instant tasks at the same time."
                    },
                    {
                        "effect": "When in the Astral Realms, one of the actions may be purely “Physical.”",
                        "cost": 2
                    }
                ]
            },
            {
                "withstand": "",
                "name": "Perfect Recall",
                "primaryFactor": "Potency",
                "description": "     The subject is able to recall things from her past with vivid detail. For each level of Potency of the spell, the subject can recall one memory with perfect accuracy. She can remember the exact size, smell, weight, and words written on a piece of paper. She can recall the exact details of a conversation, including bits that she wasn’t consciously concentrating on, such as what kind of suit someone was wearing, or the smell of his cologne.",
                "suggestedRotes": "Academics, Expression, Investigation",
                "reach": [],
                "cost": "",
                "arcanum": "Mind",
                "dots": 1,
                "practice": "Unveiling"
            },
            {
                "primaryFactor": "Potency",
                "cost": "",
                "practice": "Veiling",
                "dots": 2,
                "description": "     The mage can alter the subject’s basic mental flow, changing her subconscious thoughts and surface emanations to reflect any mental or emotional state the mage wishes. The spell does not actually alter the subject’s state of mind, but instead alters how she projects herself, shielding her from supernatural powers that would read her thoughts, or attempt to pierce her normal veil of lies and misdirection. Add the spell’s Potency to relevant Subterfuge rolls.Supernatural powers that read the surface thoughts or emotions of the subject provoke a Clash of Wills.",
                "withstand": "",
                "suggestedRotes": "Science, Stealth, Subterfuge",
                "name": "Alter Mental Pattern",
                "arcanum": "Mind",
                "reach": []
            },
            {
                "dots": 2,
                "practice": "Ruling",
                "primaryFactor": "Duration",
                "suggestedRotes": "Empathy, Medicine, Persuasion",
                "name": "Dream Reaching",
                "reach": [
                    {
                        "effect": "the mage becomes an active part of the dream, able to take action inside as described on p. 248. Casting the spell on herself induces lucid dreaming if she sleeps during the spell’s Duration, without need for meditation",
                        "cost": 1
                    }
                ],
                "description": "     The mage may enter and share the dreams of a sleeping subject. The mage witnesses the dream, and can influence its direction, though she is not directly a part of the dream. Casting this spell on herself ensures the mage remembers her dreams.",
                "arcanum": "Mind",
                "cost": "",
                "withstand": "Composure"
            },
            {
                "practice": "Ruling",
                "dots": 2,
                "withstand": "Composure",
                "primaryFactor": "Potency",
                "description": "     The mage can project an emotional state at her subject, instilling emotions that grease social wheels or create barriers between people. The mage chooses at casting to project a positive or negative emotion at her subject, which allows her to open or close one Door. Opening a Door usually occurs before an attempted Social maneuver, and the influence of the Door opening does not have to benefit the mage, but can benefit anyone dealing with the subject during the Duration of the spell. The mage may close Doors previously opened with the subject, making it harder for others to accomplish goals.",
                "cost": "",
                "suggestedRotes": "Empathy, Intimidation, Subterfuge",
                "reach": [],
                "name": "Emotional Urging",
                "arcanum": "Mind"
            },
            {
                "name": "First Impressions",
                "cost": "",
                "arcanum": "Mind",
                "reach": [],
                "practice": "Ruling",
                "suggestedRotes": "Crafts, Socialize, Subterfuge",
                "description": "     The mage can dictate how a subject will react to a social interaction, making her more or less inclined to listen to an argument. The spell affects the next Social maneuvering attempt made against the subject, raising or lowering the first impression by levels equal to Potency.",
                "withstand": "Composure",
                "primaryFactor": "Duration",
                "dots": 2
            },
            {
                "description": "     The mage hides the subject’s psychic presence, causing onlookers to ignore her. When people look at her, they want to avert their eyes, or barely notice her. People cannot remember seeing her when they are no longer looking her way. Beings using supernatural abilities to concentrate on her, including Active Mage Sight, provoke a Clash of Wills.",
                "reach": [],
                "name": "Incognito Presence",
                "withstand": "Resolve",
                "practice": "Veiling",
                "suggestedRotes": "Empathy, Stealth, Subterfuge",
                "primaryFactor": "Duration",
                "cost": "1 Mana",
                "arcanum": "Mind",
                "dots": 2
            },
            {
                "dots": 2,
                "practice": "Veiling",
                "arcanum": "Mind",
                "withstand": "",
                "primaryFactor": "Duration",
                "description": "     The mage compartmentalizes the subject’s thoughts, placing memories into areas that she cannot access or remember. The mage can compartmentalize one memory per Potency, making the subject forget them completely for the Duration of the spell.",
                "suggestedRotes": "Academics, Medicine, Subterfuge",
                "cost": "",
                "name": "Memory Hole",
                "reach": []
            },
            {
                "withstand": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The protection afforded by this spell extends to Goetia’s physical attacks."
                    }
                ],
                "suggestedRotes": "Academics, Intimidation, Survival",
                "practice": "Shielding",
                "arcanum": "Mind",
                "dots": 2,
                "name": "Mental Shield",
                "primaryFactor": "Duration",
                "description": "     The mage erects a mental shield that protects the subject from mental attack. The shield provokes a Clash of Wills against any Goetia Numina, Influences, or Manifestations targeting the 161 mind subject, any Mind spells, and any other supernatural creature’s mind-affecting abilities.",
                "cost": ""
            },
            {
                "primaryFactor": "Potency",
                "arcanum": "Mind",
                "withstand": "Resolve",
                "description": "     The mage employs limited telepathic projections. She can send simple commands through thoughts and emotions to her subject through a mental link, but not full sentences or complex ideas. The ideas form urges and desires within the subject that he is compelled to act upon even against his will as long as the spell remains active. The commands must be simple, one-word orders — such as to sleep, eat, sit, or defend. The intention of the command is sent to the subject along with the thoughts and emotions.\n     The subject knows that the ideas are not originating from himself, though he does not necessarily know where they are coming from. These communications can be used to project emotions with “Emotional Urging” p. 160.",
                "practice": "Ruling",
                "dots": 2,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage is capable of taking control of her subject, forcing him to take actions against his will. The mage can force the subject to perform one task. The task can be as complex or simple as the mage desires, giving the subject detailed mental instructions on how to go about completing the task. She cannot force the subject to act in a way that would put him in serious danger, or to commit suicidal acts."
                    },
                    {
                        "cost": 2,
                        "effect": "The mage must spend one Mana when casting the spell. As with +1 Reach above, but the mage can force her subject to take any kind of action without limitations. For example, the mage could direct her victim to shoot himself in the head, or to run into a burning building"
                    }
                ],
                "cost": "",
                "name": "Psychic Domination",
                "suggestedRotes": "Expression, Intimidation, Subterfuge"
            },
            {
                "cost": "",
                "description": "     The mage synchronizes the surface thoughts of her subjects, making the surface thoughts of one play out in the mind of the others. Apply the spell’s Potency as a bonus or penalty to relevant Skill rolls (such as Empathy or Subterfuge) between the subjects. Subjects who carefully think of a message may use the effect to communicate telepathically along the link; this may require a Composure + Empathy roll for subjects unused to the sensation.",
                "name": "Telepathy",
                "dots": 2,
                "arcanum": "Mind",
                "withstand": "Composure",
                "practice": "Ruling",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "effect": "Only thoughts the originating subject wishes to send are transmitted.",
                        "cost": 1
                    },
                    {
                        "effect": "All subjects of the spell are capable of both sending and receiving thoughts. If the spell has several subjects unused to telepathy, it may impose a –2 penalty to Mental actions through sheer mental “noise.”",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Crafts, Empathy, Socialize"
            },
            {
                "cost": "",
                "description": "     The mage is capable of increasing the subject’s mental or social capacity. The mage can increase one of either the subject’s Mental or Social Attributes by one dot per level of Potency of the spell. This increase affects any Advantages or other traits derived from the Attribute’s level. The spell cannot increase the subject’s Attribute above her normal maximum allowed by her Gnosis. The benefits of this spell are not obvious to a casual observer, but those who know the subject may notice an increase in her intellect or charismatic nature.",
                "practice": "Perfecting",
                "name": "Augment Mind",
                "primaryFactor": "Potency",
                "suggestedRotes": "Academics, Expression, Survival",
                "withstand": "",
                "arcanum": "Mind",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may increase an additional Attribute with the spell for each additional Reach, dividing the spell’s Potency among them. For example, the mage may spend +2 Reach with a Potency 4 spell and increase the subject’s Intelligence by +1, Resolve by +2, and Wits by +1."
                    },
                    {
                        "cost": 2,
                        "effect": "By spending a point of Mana, the mage may increase her subject’s Mental or Social Attributes above the normal maximum allowed."
                    }
                ],
                "dots": 3
            },
            {
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may decrease an additional Mental or Social Attribute for each additional Reach spent, dividing the Potency of the spell among them."
                    }
                ],
                "arcanum": "Mind",
                "withstand": "Composure or Resolve",
                "cost": "",
                "suggestedRotes": "Intimidation, Persuasion, Science",
                "primaryFactor": "Potency",
                "dots": 3,
                "name": "Befuddle",
                "description": "     The mage lowers one of her subject’s Mental or Social Attributes. Each level of Potency reduces one of the subject’s Social or Mental Attributes by one dot, to a minimum of 1. Lowering Attributes also reduces any derived Advantages, such as Willpower or Initiative.",
                "practice": "Fraying"
            },
            {
                "withstand": "Composure",
                "practice": "Perfecting",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject regains a point of Willpower. 162 chapter four: magic."
                    },
                    {
                        "effect": "The spell’s effect is Lasting, resolving targeted Conditions. This does not grant Beats.",
                        "cost": 2
                    }
                ],
                "suggestedRotes": "Empathy, Intimidation, Persuasion",
                "primaryFactor": "Duration",
                "description": "     The mage smoothes troubled thoughts and deadens emotions, making the subject think clearly. The spell suppresses one Mental Condition or Tilt per level of Potency for its Duration. While the spell is often used to treat mental illness, it may also be used against positive Conditions, suppressing elation and inspiration just as easily as despair and fugue. The spell may not affect Conditions created by Paradox, and those imposed by supernatural means provoke a Clash of Wills",
                "dots": 3,
                "arcanum": "Mind",
                "cost": "",
                "name": "Clear Thoughts"
            },
            {
                "arcanum": "Mind",
                "suggestedRotes": "Academics, Expression, Survival",
                "primaryFactor": "Duration",
                "description": "     The mage is capable of temporarily increasing one of her subject’s Skills. She can increase one Skill that the subject already has at least one rank in by one dot per level of Potency of the spell. The spell cannot increase the subject’s Skill above the normal maximum.",
                "name": "Enhance Skill",
                "cost": "",
                "dots": 3,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may increase an additional Skill with the spell per additional Reach spent, dividing the spell’s Potency among them. The Skill must still be one that the subject already has at least one rank in. For example, a mage can spend +2 Reach with a Potency 3 spell to increase the subject’s Subterfuge by +1, Stealth by +1 and Medicine by +1."
                    },
                    {
                        "cost": 2,
                        "effect": "By spending a point of Mana, the mage may increase her subject’s Skills above the normal maximum allowed."
                    }
                ],
                "practice": "Perfecting",
                "withstand": ""
            },
            {
                "withstand": "Rank",
                "dots": 3,
                "practice": "Perfecting",
                "description": "     The mage sends out a call to the nearest Goetia within her sensory range. Conversely she can summon Goetia she knows personally. She may send a general call and the nearest Goetia will answer, or she can specify the type of entity by its Resonance. The spell does not work on Goetia above Rank 5.\n     Add Spirit 2 or Death 2: The entity gains the Materialized Condition for the Duration of the spell.",
                "arcanum": "Mind",
                "suggestedRotes": "Persuasion, Socialize, Occult",
                "name": "Goetic Summons",
                "primaryFactor": "Duration",
                "cost": "Variable",
                "reach": [
                    {
                        "effect": "The spell also creates the Open Condition on the area, even if it does not match the Goetia’s Resonance.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The mage may give the Goetia a single, one-word command to follow. The Goetia is not compelled to complete a task if it cannot finish the command before the Duration of the spell elapses."
                    },
                    {
                        "cost": 1,
                        "effect": "If in a place from which she could meditate into the Astral, the mage can summon Goetia from her own Oneiros, or the Oneiros of another subject. Summoning aspects of one’s own soul is dangerous, but rewarding — the subject loses the part of his personality the Goetia represents while it is in the material world. The mage must pay as much Mana as she would need to enter the Astral Realms from her current location."
                    },
                    {
                        "effect": "As above, but the mage can summon Goetia from the Temenos.",
                        "cost": 2
                    },
                    {
                        "effect": "As above, but the mage can summon Goetia from the Anima Mundi.",
                        "cost": 3
                    },
                    {
                        "cost": 2,
                        "effect": "The mage may give the Goetia a complex command to follow. The command must be a single task, but the mage can describe the task within a sentence or two."
                    }
                ]
            },
            {
                "cost": "",
                "dots": 3,
                "suggestedRotes": "Persuasion, Stealth, Subterfuge",
                "name": "Imposter",
                "primaryFactor": "Duration",
                "withstand": "Composure",
                "description": "     The mage confuses her subject’s senses, making him believe she is someone else. She can invent an appearance, or mimic the exact look, sound, and smell of any individual she knows. Unless the mage has interacted extensively with the person she is impersonating, she must make a Manipulation + Subterfuge roll when she first begins interacting with her subject, and every minute she continues interacting with him. The spell cannot mimic specific Social Merits that grant dice bonuses to Social rolls.\n     If the mage opens any Doors, or makes any new first impressions, the progress benefit goes to the person she is impersonating, not herself.",
                "reach": [],
                "practice": "Weaving",
                "arcanum": "Mind"
            },
            {
                "suggestedRotes": "Academics, Intimidation, Medicine",
                "cost": "",
                "arcanum": "Mind",
                "withstand": "",
                "name": "Psychic Assault",
                "description": "     A living mind is a delicate thing, easily broken. This spell forces the subject’s brain into a dangerously overactive state, mimicking the effects of a stroke. The subject takes bashing damage equal to Potency",
                "primaryFactor": "Potency",
                "dots": 3,
                "practice": "Fraying",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject also suffers a –1 penalty to Mental rolls for the Duration of the spell due to the mental trauma. This effect may be applied up to three times, for a maximum penalty of –3 for three Reach."
                    }
                ]
            },
            {
                "name": "Read the Depths",
                "practice": "Weaving",
                "description": "     The mage may telepathically enter her subject’s subconscious. She may pull memories and ideas out of the subject’s subconscious, instead of just reading surface thoughts (see “Telepathy”).",
                "primaryFactor": "Potency",
                "arcanum": "Mind",
                "suggestedRotes": "Empathy, Investigation, Medicine",
                "dots": 3,
                "cost": "",
                "withstand": "Resolve",
                "reach": [
                    {
                        "effect": "As above, but now the mage is capable of modifying a single memory she has read from the subject’s subconscious 163 mind mind. She may add to, delete, or change the memory to suit her needs; and the changes last until the spell’s Duration ends. For example, the mage could make someone forget where she parked her car, remember having met the mage at her wedding, or think her favorite ice-cream flavor is vanilla instead of strawberry.",
                        "cost": 1
                    }
                ]
            },
            {
                "practice": "Perfecting",
                "name": "Sleep of the Just",
                "cost": "",
                "description": "     The mage controls the subject’s sleep cycle, allowing her to remain awake without ill effects or asleep without being roused for the spell’s Duration. The mage may also control what she dreams about, or create a lucid dreaming state where the subject has control. Anything attempting to enter or influence the dream state provokes a Clash of Wills.",
                "dots": 3,
                "suggestedRotes": "Academics, Athletics, Occult",
                "reach": [],
                "withstand": "Composure",
                "arcanum": "Mind",
                "primaryFactor": "Duration"
            },
            {
                "name": "Universal Language",
                "cost": "",
                "reach": [],
                "practice": "Weaving",
                "description": "     The spell’s subject is capable of understanding and translating any language. This is true for the spoken word, written language, symbols, encoded signals, body language, hand symbols, and concepts that only exist as thought. She must be able to perceive the language to understand it (for example, using telepathy for thoughts in another’s mind). This spell does not allow non-Awakened characters to understand High Speech.",
                "withstand": "",
                "suggestedRotes": "Academics, Investigation, Persuasion",
                "primaryFactor": "Duration",
                "arcanum": "Mind",
                "dots": 3
            },
            {
                "cost": "",
                "withstand": "",
                "arcanum": "Mind",
                "primaryFactor": "Duration",
                "suggestedRotes": "Crafts, Expression, Science",
                "practice": "Patterning",
                "name": "Gain Skill",
                "dots": 4,
                "description": "     The mage is capable of temporarily granting the subject a Skill, granting a number of dots in one Skill per level of Potency of the spell. The spell cannot increase the subject’s Skill above the normal maximum.",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may grant an additional Skill with the spell for each additional Reach spent, dividing the spell’s Potency among them. For example, a mage can spend +2 Reach with a Potency 4 spell to gain the Subterfuge Skill at one dot, the Intimidate Skill at two dots, and the Empathy Skill at one dot."
                    },
                    {
                        "effect": "By spending one Mana, the mage may increase one of the subject’s new Skills above the normal maximum.",
                        "cost": 1
                    }
                ]
            },
            {
                "primaryFactor": "Potency",
                "cost": "",
                "withstand": "Composure",
                "name": "Hallucination",
                "description": "     The mage creates false sensory input in her subject, tricking his senses and creating a hallucination. The mage creates a single illusion that seems completely real to her subject. She affects sound, smell, taste, and sight with the illusion, though she is unable to make the illusion tactile to the subject.",
                "practice": "Patterning",
                "arcanum": "Mind",
                "reach": [
                    {
                        "effect": "As above, but the mage can make the hallucination tactile to the subject. The illusion cannot attack or harm the subject in any way, but when he interacts with it, the subject 164 chapter four: magic believes he can feel the illusion. This may mean that a large illusion, such as a wall or other barrier, may make the subject believe he is incapable of passing through, barring his way.",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Academics, Persuasion, Subterfuge",
                "dots": 4
            },
            {
                "dots": 4,
                "arcanum": "Mind",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject of the spell also gains the Insane Tilt."
                    },
                    {
                        "effect": "For one point of Mana, the spell inflicts aggravated damage.",
                        "cost": 2
                    }
                ],
                "description": "     The mage pulls apart her subject’s conscious and subconscious mind, dealing damage as she does so. The subject suffers one point of lethal damage for each level of Potency of the spell.",
                "withstand": "",
                "suggestedRotes": "Expression, Intimidation, Science",
                "primaryFactor": "Potency",
                "practice": "Unraveling",
                "cost": "",
                "name": "Mind Flay"
            },
            {
                "reach": [],
                "practice": "Patterning",
                "description": "     The mage can send her consciousness into the subject and take possession of his body. The mage takes control of the subject, imposing the Possessed Condition (see p. 261). While possessing the subject, the mage uses the rules for possession as an ephemeral entity, with the following changes. She may use any of her Mind spells on the subject to read his mind, and she may spend a point of Mana to use her own Mental and Social Attributes instead of the host’s Attributes. She must always use her subject’s Physical Attributes, but may spend a point of Mana to reduce the –3 penalty on Physical actions to 0. While possessing the subject, her body is comatose as with “Psychic Projection”, below.",
                "suggestedRotes": "Medicine, Persuasion, Subterfuge",
                "primaryFactor": "Potency",
                "dots": 4,
                "withstand": "Resolve",
                "name": "Possession",
                "cost": "",
                "arcanum": "Mind"
            },
            {
                "name": "Psychic Projection",
                "dots": 4,
                "cost": "",
                "practice": "Patterning",
                "reach": [],
                "suggestedRotes": "Academics, Occult, Socialize",
                "primaryFactor": "Duration",
                "arcanum": "Mind",
                "withstand": "Resolve",
                "description": "     The mage can project the subject’s consciousness into a state of Twilight or into another’s dreams. The mental projection uses the rules for Dream Forms in Chapter Six (p. 249). It has no ephemeral body, but is instead an incorporeal, intangible mental image. While in Twilight, the subject cannot interact physically with her surroundings, and must use magic to affect anything. She is immune to physical attacks, but she is still susceptible to mind-affecting supernatural abilities. While mentally projected, her body lies in a comatose state, and she has no way of knowing its health or state without returning or the use of other magic. If her projection dies, she returns to her body with the Soul Shocked Condition.\n     Add Spirit 2: The mage may project the subject’s consciousness beyond the Gauntlet into the Shadow Realm. The spell is also Withstood by the Gauntlet rating (p. 179)."
            },
            {
                "practice": "Patterning",
                "withstand": "Resolve",
                "cost": "",
                "suggestedRotes": "Intimidation, Medicine, Persuasion",
                "name": "Psychic Reprogramming",
                "arcanum": "Mind",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may also move dots between two Social Attributes, or two Mental Attributes per Potency of the spell."
                    }
                ],
                "description": "     The mage rewrites the subject’s personality, changing the very essence of who she is. The mage may change one of the following aspects of the subject for each Potency of the spell: Virtue, Vice, Short-Term Aspiration, Long-Term Aspiration, Obsession, a non-Physical Persistent Condition, or may move one dot between two Social Skills, or between two Mental Skills.",
                "dots": 4
            },
            {
                "arcanum": "Mind",
                "dots": 4,
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage inflicts the Broken Condition instead"
                    }
                ],
                "practice": "Patterning",
                "withstand": "Composure",
                "name": "Terrorize",
                "suggestedRotes": "Expression, Intimidation, Medicine",
                "description": "     The spell provokes an overwhelming sense of fear and dread in its subject, draining his strength and will to live. The subject suffers from the Insensate Tilt for the Duration of the spell, or until the Tilt is resolved (for instance, by being attacked).",
                "cost": ""
            },
            {
                "reach": [],
                "primaryFactor": "Duration",
                "description": "     The mage severs her subject’s ties to his guiding impulses, either completely removing his Virtue or his Vice. While without a Virtue, the subject is more prone to indulging his Vice and gains two points of Willpower whenever he would normally gain one. While without a Vice, the character acts in a manner completely consistent with his Virtue, and is incapable of actively engaging in activities that would constitute a breaking point or Act of Hubris. Witnessing heinous or horrifying deeds still causes breaking points for Sleeper characters.",
                "name": "Amorality",
                "practice": "Unmaking",
                "suggestedRotes": "Crafts, Empathy, Expression",
                "arcanum": "Mind",
                "withstand": "Resolve",
                "cost": "",
                "dots": 5
            },
            {
                "cost": "",
                "primaryFactor": "Potency",
                "name": "Mind Wipe",
                "practice": "Unmaking",
                "arcanum": "Mind",
                "withstand": "Resolve",
                "reach": [
                    {
                        "effect": "The mage may choose the memories erased rather than wiping a single continuous span.",
                        "cost": 1
                    },
                    {
                        "effect": "The effect is Lasting .",
                        "cost": 2
                    }
                ],
                "dots": 5,
                "description": "     The mage removes a large portion of the subject’s memories. The victim suffers from the Amnesia Condition for the Duration of the spell, unable to recall one month of time per level of Potency. The mage may specify which portion of the subject’s life is forgotten.",
                "suggestedRotes": "Academics, Intimidation, Occult"
            },
            {
                "suggestedRotes": "Expression, Persuasion, Science",
                "description": "     The mage creates a mental thought loop for her subject, trap￾ping him within his own mind. For the Duration of the spell, 165 prime the subject is unable to do anything but play through a single continuous loop in his mind. Thoughts cannot enter or exit the subject’s mind, and he appears nearly catatonic to outside observers. Attempts to read the subject’s mind or memories reveal the thought loop. Supernatural attempts to force new thoughts provoke a Clash of Wills.",
                "name": "No Exit",
                "cost": "",
                "primaryFactor": "Duration",
                "withstand": "Resolve",
                "dots": 5,
                "reach": [],
                "arcanum": "Mind",
                "practice": "Making"
            },
            {
                "withstand": "",
                "suggestedRotes": " Academics, Expression, Science",
                "description": "     The mage creates a consciousness as a self-aware intelligence with a Twilight presence. The consciousness gains traits as a Rank 1 Goetia. The consciousness remains for the Duration of the spell as the mage’s loyal servant, and she is able to direct it to complete tasks without the use of any additional spells.",
                "practice": "Making",
                "arcanum": "Mind",
                "name": "Psychic Genesis",
                "primaryFactor": "Duration",
                "dots": 5,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The consciousness works as a Sleepwalker for purposes of assisting in ritual casting."
                    },
                    {
                        "effect": "For one Mana, the consciousness gains Rank 2",
                        "cost": 1
                    }
                ],
                "cost": ""
            },
            {
                "withstand": "",
                "primaryFactor": "Potency",
                "description": "     The mage creates social networks where none existed before. For each level of Potency, the subject gains one dot in one of the following Merits: Allies, Contacts, or Status.",
                "name": "Social Networking",
                "reach": [],
                "cost": "",
                "dots": 5,
                "arcanum": "Mind",
                "suggestedRotes": "Persuasion, Politics, Socialize",
                "practice": "Making"
            }],
            prime: [{
                "suggestedRotes": "Athletics, Intimidation, Occult",
                "description": "     All Awakened magic contains the capacity to end, to allow the Fallen World’s laws to reassert themselves. By Compelling these flaws in an extant spell, the mage may temporarily suppress it — or even destroy it entirely. This spell is not potent enough to dispel an archmage’s spells, and only works against Awakened magic. In addition, the mage must include all Arcana involved in the casting of the subject spell at one dot. A successful casting suppresses the spell for the Duration of Dispel Magic.\n     Add Fate 1: The mage may suppress the subject spell selectively, for a number of subjects equal to Dispel Magic’s Scale factor.",
                "primaryFactor": "Potency",
                "name": "Dispel Magic",
                "cost": "",
                "arcanum": "Prime",
                "practice": "Compelling",
                "dots": 1,
                "withstand": "Arcanum rating of the subject spell’s caster",
                "reach": [
                    {
                        "cost": 2,
                        "effect": "For one point of Mana, the effect is Lasting. If the spell’s original caster is still alive and has not relinquished the spell, she knows one of her spells was destroyed."
                    }
                ]
            },
            {
                "withstand": "",
                "practice": "Unveiling",
                "reach": [
                    {
                        "effect": "In addition to sensing falsehoods, the subject gets some symbolic sense of what the actual truth is, veiled in Supernal symbolism and metaphor.",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Investigation, Medicine, Occult",
                "dots": 1,
                "arcanum": "Prime",
                "name": "Pierce Deception",
                "description": "     Prime is the Arcanum of pure Truth, and no falsehood may stand before it. By means of this spell, the subject sees illusions, phantasms, and lies for what they are. The spell sees through mundane falsehoods the subject perceives automatically; magical illusion or deception automatically provokes a Clash of Wills.\n     This spell only reveals “active” untruths: the subject would see that someone with dyed hair isn’t really a blonde, or recognize a lie when she heard it, but she wouldn’t know that a Wall Street executive has been committing tax fraud for years just by looking at him. If she got a look at his tax return, however, she would see that it was a falsehood.",
                "primaryFactor": "Duration",
                "cost": ""
            },
            {
                "cost": "",
                "withstand": "",
                "arcanum": "Prime",
                "dots": 1,
                "reach": [
                    {
                        "effect": "The mage’s perceptions expand to tell her when a node sits atop a Hallow.",
                        "cost": 1
                    }
                ],
                "description": "     While her senses are open to this spell, the subject can clearly perceive ley lines and nodes. Depending on the caster’s Path and Nimbus, she might see them as beams of golden light meeting at shining Platonic solids, electric-blue rivers pooling into lakes, or strains of music building into a mighty symphony. If there are no ley lines or nodes within sensory range, the subject feels a tugging sensation toward the nearest ley or node.\n     Add Death 1 or Spirit 1: The mage’s senses are also attuned to the presence of Avernian Gates or Loci, respectively. Other Arcana may reveal stranger sacred spaces, as well.",
                "primaryFactor": "Duration",
                "practice": "Unveiling",
                "name": "Sacred Geometry",
                "suggestedRotes": "Academics, Occult, Survival"
            },
            {
                "arcanum": "Prime",
                "suggestedRotes": "Crafts, Expression, Occult",
                "practice": "Compelling",
                "dots": 1,
                "withstand": "Total Arcanum dots of all Arcana used in the spell being scribed.",
                "primaryFactor": "Potency",
                "cost": "1 Mana",
                "name": "Scribe Grimoire",
                "reach": [
                    {
                        "effect": "For one point of Mana, the spell’s Duration is Lasting.",
                        "cost": 1
                    }
                ],
                "description": "     By means of this spell, the mage gives physical form to the mudras of a particular Rote, creating a Grimoire (see p. 101). This spell has two slightly different, albeit related, applications: The mage may either inscribe a Rote she knows, or she may copy a Rote from another Grimoire she has on hand.\n     Only a single Rote can be inscribed per casting of this spell, but a given Grimoire may hold multiple Rotes at a time: A large book can hold anywhere from 10–15 Rotes, while a fist-sized carved stone might only hold one or two, and a computer database could hold a theoretically unlimited number.\n     When the spell’s Duration expires, the inscribed Rotes fade and cannot be recovered."
            },
            {
                "withstand": "",
                "practice": "Unveiling",
                "description": "     By opening her subject’s third eye, the mage reveals her fellows as the wells of Supernal power they are. By studying a person, place, or location for one turn, the subject automatically knows whether it is connected to the Supernal (e.g. if a person is a mage, a Sleepwalker, a Proximus, or a Sleeper; if a place is a Demesne or Verge; if an object is Imbued, Enhanced, or an Artifact), and may ask a number of the following questions equal to the spell’s Potency:\n     - How much Mana does the target have in her Pattern? \n     - To which Supernal World is the target most closely aligned? \n     - What is the target’s highest-rated Arcanum?* \n     - How adept is the target at their highest-rated Arcanum? \n     - How many Arcana does the subject know? \n     - What is the target’s Nimbus? \n     - What is the target’s Gnosis? \n     * Subsequent asking of this question reveals the target’s second, third, etc. highest Arcana. \n     The subject perceives the answers as Supernal symbols and visions unfolding around the target. If the subject desires more information about a particular phenomenon, she may study it for multiple turns, as long as the spell’s Duration lasts. Effects that would cloak the target’s nature provoke a Clash of Wills as normal.",
                "primaryFactor": "Potency",
                "cost": "",
                "dots": 1,
                "name": "Supernal Vision",
                "arcanum": "Prime",
                "suggestedRotes": "Empathy, Occult, Survival",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The spell reveals the nature of supernatural beings and effects other than Supernal phenomena — though there’s no guarantee the mage knows what the aura of, for example, a Promethean looks like, and most of the questions will return nonsensical imagery that best translates as “not applicable.”"
                    }
                ]
            },
            {
                "primaryFactor": "Potency",
                "dots": 1,
                "description": "     Enchanted objects and long-lasting spells often have specific triggers or conditions that must be fulfilled before they will release their magic. With this spell, a mage can bypass those conditions, freeing the magic to do that which it would. The object or spell immediately activates, exactly as though it were triggered by whatever normally triggers the effect. If an activation roll is normally required, treat the spell’s Potency as rolled successes.\n     If the subject spell requires Mana to activate, the mage must spend it from her own pool.\n     Without additional Arcana, this spell can only trigger Supernal spells and objects tied to the Supernal World such as Artifacts and Imbued Items. \n     Add Any Other Arcanum 1: By adding the relevant Arcanum, a mage can activate magical effects and objects created by other sources of power — Spirit to activate a fetish, Fate to trigger a faerie’s curse, and so on. If this object requires mystical energy (Essence or stranger substances) to activate, the mage may spend Mana in lieu of the normal power source.",
                "practice": "Compelling",
                "suggestedRotes": "Craft, Occult, Persuasion",
                "name": "Word of Command",
                "arcanum": "Prime",
                "cost": "Variable",
                "withstand": "",
                "reach": []
            },
            {
                "withstand": "",
                "dots": 2,
                "practice": "Ruling",
                "cost": "",
                "suggestedRotes": "Academics, Occult, Politics",
                "arcanum": "Prime",
                "description": "     A mage’s tools are sacred, her every word and deed a reflection of the Realms Above. By means of this spell, the mage imbues the tools of her Art with holy meaning, allowing her to draw down power with greater facility. For every level of Potency, she chooses a single Yantra (and it must be a specific example of a Yantra, not just a category: “the Crypt of the Mariner,” not just “Environment”). Any spell cast that incorporates that Yantra gains the 9-Again effect on the spellcasting roll.",
                "primaryFactor": "Duration",
                "name": "As Above, So Below",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The Yantra instead grants the 8-Again effect on spellcasting rolls."
                    }
                ]
            },
            {
                "description": "     This spell cloaks the subject’s Nimbus from spells and effects that would read it, such as Supernal Vision or the ability of certain psychics to read emotional states in auras. Any such effect is subject to a Clash of Wills (see p. 117). Any effect that fails to pierce the veil registers the subject as an ordinary Sleeper. Spells cast while under the influence of this spell do not cause the caster’s Immediate Nimbus (see p. 89) to flare unless she chooses to.\n     Furthermore, while this spell is active the subject’s Signature Nimbus (see p. 89) is muted; any attempt to scrutinize it with Mage Sight provokes a Clash of Wills.\n     If the scrutinizing mage fails, he is unable to find any identifiable traits in the Signature Nimbus. If the subject takes any action that causes her Nimbus to flare, such as allowing it to do so when casting a spell or imprinting her Signature Nimbus on an object, this spell ends immediately.",
                "name": "Cloak Nimbus",
                "withstand": "",
                "arcanum": "Prime",
                "primaryFactor": "Duration",
                "dots": 2,
                "practice": "Veiling",
                "cost": "",
                "suggestedRotes": "Politics, Stealth, Subterfuge",
                "reach": [
                    {
                        "effect": "Rather than veiling her subject’s abilities completely, the mage may project the Nimbus of a lesser magician. For each Reach she applies, she may choose one of Gnosis, Mana, or any Arcanum she knows, and specify a value below her subject’s actual Trait rating. Any effect that fails to penetrate her veil registers the false Trait value. The mage cannot pretend to powers the subject does not have: An Adept of Prime can be masked to seem a mere Initiate, but cannot project the Nimbus of a Master, nor can she be made to seem an Apprentice of Space if she has no dots in that Arcanum.",
                        "cost": 1
                    }
                ]
            },
            {
                "primaryFactor": "Duration",
                "reach": [],
                "name": "Invisible Runes",
                "dots": 2,
                "description": "     The Awakened make use of signs others can’t see. This spell draws a short message in High Speech, visible only to Mage Sight, onto its subject. Attempting to alter the marks by overwriting them provokes a Clash of Wills. Mages use these signs to mark their cabal’s property and territory, or leave warnings for one another, as any form of Active Mage Sight reveals them.",
                "practice": "Ruling",
                "withstand": "",
                "arcanum": "Prime",
                "cost": "",
                "suggestedRotes": "Expression, Intimidation, Persuasion"
            },
            {
                "name": "Supernal Veil",
                "reach": [],
                "arcanum": "Prime",
                "suggestedRotes": "Occult, Subterfuge, Survival",
                "withstand": "",
                "cost": "",
                "dots": 2,
                "practice": "Veiling",
                "description": "     Sometimes even the greatest magician must hide her light under a bushel. This spell wards its subject, which can be a spell, object, mage, supernatural creature, or any other active magical phenomenon, from detection. Passive abilities (such as Peripheral Mage Sight) automatically fail to detect the veiled phenomenon, while active attempts provoke a Clash of Wills.",
                "primaryFactor": "Duration"
            },
            {
                "suggestedRotes": "",
                "dots": 2,
                "withstand": "",
                "arcanum": "Prime",
                "name": "Wards and Signs",
                "cost": "",
                "description": "     By cloaking her subject in Aetheric symbols of victory and indomitability, the mage shields the subject from the effects of hostile magic. When the subject is the target of a spell, that spell is Withstood with the Potency of Wards and Signs.\n     Only spells that directly target the subject can be Withstood; a spell that turns the air around her into fire cannot be Withstood. Likewise, if the subject is one of many subjects, Wards and Signs only Withstands the spell with regards to her. Other subjects suffer the full effects.",
                "primaryFactor": "Duration",
                "practice": "Shielding",
                "reach": []
            },
            {
                "primaryFactor": "Potency",
                "name": "Words of Truth",
                "dots": 2,
                "cost": "",
                "withstand": "Composure",
                "arcanum": "Prime",
                "description": "     The mage speaks with tongues of fire, and the world listens. So long as the words the mage speaks are objectively true and the mage herself knows them to be true, all subjects of this spell can hear her and understand her clearly, regardless of distance, noise, or language barriers. Moreover, all subjects know, on a soul-deep level, that what the mage says is true. The spell only works on statements the mage knows to be true: She can’t use it to confirm or reject theories. It also doesn’t necessarily compel the targets to act on the information in any particular way, but ignoring or refuting this Supernal truth may be grounds for a breaking point. In a Social maneuvering action, this spell may remove one Door or improve the impression level by one step per point of Potency.",
                "practice": "Ruling",
                "suggestedRotes": "Expression, Intimidation, Persuasion",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage’s words don’t merely ring with truth, they call to action. If a listener goes along with what the mage said, he gains the Inspired Condition. If, however, he ignores the mage’s words, he gains the Guilty Condition."
                    }
                ]
            },
            {
                "practice": "Weaving",
                "primaryFactor": "Potency",
                "description": "     The mage calls forth a bare fraction of the howling fury of the Aether, scouring her subject with shrieking winds. This is an attack spell, inflicting bashing damage equal to Potency.",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The winds of this spell stick around after casting, creating a Heavy Winds Environmental Tilt in the immediate vicinity."
                    },
                    {
                        "effect": "In lieu of damage, the mage may assign Potency to instead destroy the target’s Mana. One level of Potency so assigned destroys one point of Mana, and Potency may be freely split between Mana destruction and damage.",
                        "cost": 1
                    }
                ],
                "withstand": "",
                "arcanum": "Prime",
                "dots": 3,
                "cost": "",
                "name": "Aetheric Winds",
                "suggestedRotes": "Athletics, Expression, Occult"
            },
            {
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may ignore her Mana per turn limit, channeling as much Mana as she desires as an instant action."
                    }
                ],
                "dots": 3,
                "primaryFactor": "Potency",
                "suggestedRotes": "Occult, Politics, Socialize",
                "practice": "Weaving",
                "name": "Channel Mana",
                "description": "     The flows of Supernal energy are the mage’s to manipulate. This spell allows the mage to move a quantity of Mana equal to the spell’s Potency between one or more vessels she can touch, including other mages, herself, Hallows, Artifacts, and others. She must, however, respect her Gnosis-derived Mana per turn limit.",
                "arcanum": "Prime",
                "withstand": "Composure (or Rank for Supernal entities)",
                "cost": ""
            },
            {
                "primaryFactor": "Potency",
                "withstand": "",
                "name": "Cleanse Pattern",
                "suggestedRotes": "Investigation, Occult, Stealth",
                "arcanum": "Prime",
                "cost": "",
                "dots": 3,
                "description": "     The Forms making up a subject’s Supernal Pattern are marked by the touch of magic. With this spell, a mage removes the tell-tale signs of Awakened interference. The spell removes the dramatic failure effect of a Focused Mage Sight Revelation (p. 92) from a subject. If the spell’s subject bears a mage’s Signature Nimbus, the spell removes it.",
                "reach": [],
                "practice": "Fraying"
            },
            {
                "withstand": "",
                "name": "Display of Power",
                "arcanum": "Prime",
                "suggestedRotes": "Brawl, Occult, Socialize",
                "cost": "",
                "practice": "Weaving",
                "dots": 3,
                "primaryFactor": "Duration",
                "description": "     Magic itself falls under the purview of Prime, even its most private functions. By using this spell, a mage stirs the Supernal World, making it respond to mages within the spell’s area. Rather than being wholly internal, Imagos formed by mages within the spell’s effect become visible in the Supernal World to all forms of Active Mage Sight, displayed as magical runes and flashes of symbols hovering around the mage. Mages use this spell as a 169 prime teaching aid, forming Imagos to display to their students without actually casting. The spell has another role in mage society, though; it is the basis for the Duel Arcane (see p. 294), in which two rival mages display what they could do to one another.",
                "reach": [
                    {
                        "cost": 2,
                        "effect": "For one Mana, any attempt to Counterspell (p. 192) a spell cast within the area gains the rote action quality, as the plainly visible Imago makes the spell easy to decipher. (In many duels, seconds are appointed to stand ready to Counterspell attempts at cheating.)"
                    }
                ]
            },
            {
                "name": "Ephemeral Enchantment",
                "practice": "Weaving",
                "suggestedRotes": "Crafts, Occult, Weaponry",
                "description": "     The symbol-forms of the Aether are real enough to cut through all layers of reality. This spell enchants the subject to be as solid to Twilight entities as to physical matter. This spell is equally effective against all forms of Twilight; the subject may interact with ghosts, spirits, angels, and stranger things with equal facility.",
                "dots": 3,
                "withstand": "",
                "cost": "",
                "reach": [
                    {
                        "cost": 2,
                        "effect": "If the enchanted object is a weapon, it may be enchanted to act as the bane of a specified being in Twilight for one Mana. Extra subjects may be added with the Scale spell factor, but each costs one extra point of Mana."
                    }
                ],
                "arcanum": "Prime",
                "primaryFactor": "Duration"
            },
            {
                "dots": 3,
                "reach": [],
                "withstand": "",
                "arcanum": "Prime",
                "practice": "Weaving",
                "description": "     By imposing her will upon the earth’s natural flow of energy, the mage may redirect ley lines within the area of effect, reshaping Nodes and altering Resonance freely. She may move ley lines, and therefore the Nodes created where ley lines cross, “pinning” a line to a point within the area of effect of the spell. She may also change the Resonance Keyword of a Node to whatever she wishes.",
                "primaryFactor": "Duration",
                "cost": "",
                "name": "Geomancy",
                "suggestedRotes": "Academics, Expression, Occult"
            },
            {
                "name": "Platonic Form",
                "withstand": "",
                "practice": "Weaving",
                "reach": [
                    {
                        "effect": "If the object is a tool, it is a perfected ideal of that tool. It grants 8-Again.",
                        "cost": 1
                    },
                    {
                        "cost": 2,
                        "effect": "The Mana construct can be a complex device."
                    }
                ],
                "arcanum": "Prime",
                "dots": 3,
                "description": "     The mage may pattern Mana into behaving as it does within tass, creating a magical object formed of pure Mana. The object must be a simple object or tool (swords and gemstones are allowable, guns and cars are not). It is obviously magical to onlookers, has a default Durability of 1 and consists of one point of Mana (which the mage must pay as part of the casting). Potency may be allocated to the following effects:\n     - Increase Durability by +1 \n     - Increase Mana capacity by +1 (the mage may fill this Mana capacity by spending Mana as part of the casting or leave the object partially empty) \n     - If the object can be used as a tool or weapon, add +1 equipment bonus or weapon damage. Each action using the construct as a tool or weapon uses up 1 Mana from its supply.\n     When all Mana is withdrawn from the object, it crumbles to nothing. A mage may “refill” it with the Channel Mana spell or similar effects. When the spell’s Duration runs out, any unused Mana sublimates back into the world and is lost.\n     Add Forces 3: The object is not obviously magical.",
                "suggestedRotes": "Academics, Crafts, Expression",
                "cost": "1+ Mana",
                "primaryFactor": "Potency"
            },
            {
                "practice": "Perfecting",
                "primaryFactor": "Duration",
                "withstand": "Resolve",
                "reach": [],
                "arcanum": "Prime",
                "description": "     Prometheus brought fire from Olympus to the mortal realm. By means of this spell, the mage brings a tiny fragment of Supernal fire to the sleeping masses, if only for a time. The subject of this spell, who must be a Sleeper, temporarily becomes a Sleepwalker (see p. 303) with all that entails. Any breaking points due to witnessing magic and Quiescence effects the subject would normally suffer are held in abeyance until the spell’s Duration expires, only to come crashing down all at once when the spell ends.",
                "cost": "",
                "name": "Stealing Fire",
                "suggestedRotes": "Expression, Larceny, Persuasion",
                "dots": 3
            },
            {
                "primaryFactor": "Duration",
                "arcanum": "Prime",
                "suggestedRotes": "Occult, Persuasion, Socialize",
                "dots": 4,
                "reach": [
                    {
                        "effect": "Add Any Other Arcanum 1: The mage may add an Arcanum to the granted Sight, but must pay Mana to add Common or Inferior Arcana as though she were activating Mage Sight herself.",
                        "cost": 1
                    }
                ],
                "description": "     The subject of this spell has the scales of the Lie removed from his eyes. Anyone subject to this spell — mage, Sleeper, or other supernatural being — gains Mage Sight attuned to the Path of the caster. Along with this gift comes temporary immunity to the Quiescence curse. It does not, however, prepare the target for how to interpret the visions received under Mage Sight, and the uninitiated are likely to face breaking points due to the trauma of the Sight. While Awakened subjects may control the new Sight as though it were their own, focusing it and pushing it back to the Periphery like their own, other subjects gain Active Mage Sight and cannot shut the Sight off — it lasts until the spell’s Duration expires, but still applies dice pool penalties and Willpower costs as per Mage Sight (see p. 90). If the subject runs out of Willpower points and the spell is still active, he gains the Blind Condition as the Supernal vision burns out his eyes. (At the Storyteller’s discretion, this might be replaced with Deafened or a similar Condition if the subject experiences Mage Sight with other senses).",
                "practice": "Patterning",
                "name": "Apocalypse",
                "cost": "",
                "withstand": "Resolve"
            },
            {
                "withstand": "",
                "name": "Celestial Fire",
                "arcanum": "Prime",
                "description": "     The mage summons the Supernal fires of the Aether to smite her enemies. This is not base, Fallen flame, but rather the pure expression of Awakened will. This is an attack spell; its damage rating is equal to the spell’s Potency, and it inflicts lethal damage. The spell affects Twilight entities.",
                "dots": 4,
                "practice": "Patterning",
                "suggestedRotes": "Athletics, Expression, Occult",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The celestial fires of this spell ignite flammable objects in the scene."
                    },
                    {
                        "cost": 1,
                        "effect": "For one point of Mana, the spell inflicts aggravated damage."
                    },
                    {
                        "cost": 1,
                        "effect": "In lieu of damage, the mage may assign Potency to instead destroy the target’s Mana. One level of Potency so assigned destroys one point of Mana, and Potency may be freely split between Mana destruction and damage."
                    }
                ],
                "cost": "",
                "primaryFactor": "Potency"
            },
            {
                "name": "Destroy Tass",
                "suggestedRotes": "Brawl, Intimidation, Occult",
                "arcanum": "Prime",
                "dots": 4,
                "practice": "Unraveling",
                "description": "     At the mage’s whim, constructs of Mana are swept away on the winds of Aether. A successful casting destroys the tass. The Mana held within it is not destroyed, but sublimates into the world and likely returns to the nearest Hallow.",
                "reach": [],
                "cost": "",
                "withstand": "Durability",
                "primaryFactor": "Potency"
            },
            {
                "description": "     The tides of Aether ebb and flow, awakening sacred places and sending them to sleep once more in the cycle of ages. This spell allows the mage to bend that cycle to her will. The mage may suppress an active Hallow or awaken a dormant one with this spell. Rousing a slumbering Hallow requires a Potency equal to the Hallow’s rating, while damping a Hallow reduces its effective dot rating by one per point of Potency. If the Hallow is suppressed to zero dots or fewer, it falls dormant. See p. 241 for more information on Hallows.",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "effect": "For one point of Mana, the effect is Lasting.",
                        "cost": 2
                    }
                ],
                "practice": "Patterning",
                "arcanum": "Prime",
                "dots": 4,
                "suggestedRotes": "Expression, Occult, Survival",
                "withstand": "Hallow Rating",
                "name": "Hallow Dance",
                "cost": ""
            },
            {
                "dots": 4,
                "cost": "",
                "reach": [
                    {
                        "cost": 2,
                        "effect": "For one point of Mana, the effect is Lasting. If the spell’s original caster is still alive and has not relinquished the spell, she knows one of her spells was destroyed."
                    }
                ],
                "primaryFactor": "Potency",
                "description": "     Supernal truths can never truly be unmade, but with this spell the mage may cast them back across the Abyss, effectively erasing any spell she comes across. This spell is not potent enough to dispel archmages’ spells.\n     A successful casting suppresses the spell for the Duration of Supernal Dispellation.\n     Add Fate 1: The mage may suppress the subject spell selectively, for a number of subjects equal to the Dispel’s Scale factor.",
                "withstand": "Arcanum rating of the subject spell’s caster",
                "arcanum": "Prime",
                "suggestedRotes": "Athletics, Intimidation, Occult",
                "practice": "Unraveling",
                "name": "Supernal Dispellation"
            },
            {
                "withstand": "Hallow Rating, if applicable",
                "dots": 5,
                "name": "Blasphemy",
                "practice": "Unmaking",
                "description": "     By defining all truths, the Supernal includes the means of its own erasure. This spell severs the world’s connection with the Supernal, creating a “dead zone” in which the energies of life simply cease to be. The spell has the following effects:\n     - Ley lines within the area dry up and die. Nodes similarly cease to function.\n     - Hallows whose rating is less than the spell’s Potency fall dormant.\n     - Sleepers who spend more than a day within the area gain the Enervated condition (though this is not soul loss and the victims do not progress to the Thrall Condition, see p. 315).\n     - Any attempt to reawaken a Hallow within the area adds the Potency of this spell to the Hallow’s dot rating for purposes of Withstanding the effect.",
                "arcanum": "Prime",
                "suggestedRotes": "Athletics, Occult, Survival",
                "reach": [
                    {
                        "cost": 2,
                        "effect": "The effects are Lasting, though without major geomantic workings to maintain the barren state, within a month or so natural rhythms will reassert themselves and ley lines, nodes, and the health of the Sleepers will return. Hallows, however, remain dormant."
                    }
                ],
                "cost": "",
                "primaryFactor": "Potency"
            },
            {
                "description": "     The Awakened speaks, and the heavens reshape themselves. This spell overwrites the conditions of Fallen Reality within the area, creating a Hallow with a dot rating equal to the spell’s Potency. This Hallow has Resonance appropriate to its location 171 prime and to the caster’s Path and Nimbus (see p. 242). The sudden emergence of such a mystically potent site causes massive ripples and aftershocks through the local network of ley lines, which almost certainly creates new Mysteries.\n     Hallows “cap out” at a rating of 5; any Potency in excess has no effect.",
                "withstand": "Hallow Rating of desired Hallow",
                "name": "Create Truth",
                "dots": 5,
                "primaryFactor": "Duration",
                "practice": "Making",
                "cost": "5 Mana per Potency",
                "suggestedRotes": "Expression, Occult, Persuasion",
                "reach": [
                    {
                        "effect": "For 5 Mana, the effect becomes Lasting.",
                        "cost": 2
                    }
                ],
                "arcanum": "Prime"
            },
            {
                "name": "Eidolon",
                "dots": 5,
                "withstand": "",
                "primaryFactor": "Potency",
                "practice": "Making",
                "reach": [],
                "suggestedRotes": "Academics, Crafts, Occult",
                "description": "     Where adepts of Prime can create platonic objects by forcing Mana into the pattern it wears within tass, a master can create the complex Prime patterns within living beings and the environment. When fuelled with Mana, this spell creates an obviously-magical construct much like Platonic Form, except that the construct is not limited to single physical objects. Eidolons may imitate fire, fog, and even entire environments, but most masters use it to create “living” constructs. Eidolons are still made of solidified Mana, and have Durability and Structure instead of Healt , and when mimicking environmental hazards do not inflict damage as they do (Eidolon fire does not burn, for example.) They follow the Potency rules for Platonic Form (p.169) but Potency may also be allocated to grant dots of the Retainer Merit.\n     Though animate, the construct is mindless . If used as a Retainer, the Eidolon’s “field” includes simple physical labor, combat, and other uncomplicated tasks. The Eidolon can only execute whatever order the caster gave it last. Orders must be very simple. If attacked, the Eidolon has no Defense.\n     Unlike Platonic forms, Eidolons do not crumble when all Mana is withdrawn. A mage may “refill” the construct with the Channel Mana spell (p. 168) or similar effects. When the spell’s Duration runs out, any unused Mana sublimates back into the world and is lost.\n     Add Forces 3: The construct is not obviously magical.\n     Add Mind 5: The tass may be given a mind of its own. See p. 165 for details.",
                "arcanum": "Prime",
                "cost": "1+ Mana"
            },
            {
                "cost": "",
                "name": "Forge Purpose",
                "suggestedRotes": "Empathy, Expression, Medicine",
                "dots": 5,
                "description": "     The mage imparts a holy mission upon her subject. For the Duration of the spell, the subject gains one of the mage’s Obsessions as his own. If the subject is a mage who already has the maximum number of Obsessions allowed by her Gnosis, this spell triggers a Clash of Wills. If the caster is successful, she replaces the subject’s most recently acquired Obsession with her own.\n     Even Sleepers, who normally only have Aspirations, gain an Obsession. Though they can’t generally spend Arcane Experiences, they still accrue them and may spend the Experiences if they ever Awaken. Some mages believe Sleepers who have experienced the Mysteries are more likely to Awaken — empirical evidence, however, suggests that mental illness is more likely.",
                "arcanum": "Prime",
                "practice": "Making",
                "withstand": "Resolve",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may create a wholly new Obsession rather than copy one of her own."
                    }
                ],
                "primaryFactor": "Duration"
            },
            {
                "suggestedRotes": "Intimidation, Occult, Weaponry",
                "description": "     The Aetheric storms scour and destroy as much as they revitalize. With this spell, the mage calls down the destructive power of the Supernal to destroy a magical item. Supernal Artifacts cannot be destroyed by this spell.",
                "practice": "Unmaking",
                "withstand": "Merit rating of the targeted magical object, or Durability if not measured in Merit dots",
                "primaryFactor": "Potency",
                "name": "Word of Unmaking",
                "cost": "",
                "reach": [
                    {
                        "cost": 2,
                        "effect": "The item explodes violently when destroyed. Roll the object’s Merit rating (or Durability) as a dice pool: Anyone within 1 yard per dot suffers a point of lethal damage per success."
                    }
                ],
                "arcanum": "Prime",
                "dots": 5
            }],
            space: [{
                "description": "     We are all of us defined by our connections, and through this spell a mage learns those definitions. For every level of Potency, the mage learns one of the subject’s sympathetic links. The spell reveals the subject’s oldest and strongest links first. She understands these connections in the same manner the subject thinks of them (e.g. “my childhood home,” not “1414 Willowbrook Drive, Columbus, OH”). If the other half of the sympathetic link is within the mage’s sensory range, she knows that and knows its exact location.",
                "suggestedRotes": "Academics, Empathy, Medicine",
                "name": "Correspondence",
                "primaryFactor": "Potency",
                "withstand": "",
                "dots": 1,
                "arcanum": "Space",
                "practice": "Knowing",
                "reach": [
                    {
                        "effect": "The mage can “follow” a trail of sympathetic links. When she learns of one of her initial subject’s sympathetic connections, she may choose to learn one of that subject’s connections, and so on. For example, she might follow a wedding ring to its owner, then its owner’s spouse, then the spouse’s place of employment.",
                        "cost": 1
                    },
                    {
                        "effect": "The mage understands the emotional character of the connection in broad terms. “My childhood home” might carry notes of comfort and safety or fear and loathing, depending on the subject’s upbringing.",
                        "cost": 1
                    },
                    {
                        "cost": 2,
                        "effect": "The mage may specify the connections she wishes to uncover in general terms (“an object with a strong link to his childhood”) or (“those she hates”). Again, the knowledge is contextualized based on the subject’s perceptions."
                    },
                    {
                        "effect": "If the subject is a Keyed spell or Iris (p. 243), the mage may use one level of Potency to discover the Key instead of a link.",
                        "cost": 2
                    }
                ],
                "cost": ""
            },
            {
                "description": "      stretching the space around her subject, the mage allows her to cover far more ground with each step than is readily apparent. The mage adds the spell’s Potency to the subject’s Speed. Watching someone under the influence of this spell is alarming: It’s hard for the eye to track her, as each step carries her farther than it should, and in every blink or momentary glance away she seems to leap farther than should be possible in such a short time.\n     This spell can also reduce a subject’s Speed by its Potency (though not below 1). Those who have experienced this effect liken it to a nightmare wherein no matter how fast you run, you never get closer to your goal.",
                "withstand": "Stamina",
                "name": "Ground-Eater",
                "dots": 1,
                "primaryFactor": "Potency",
                "practice": "Compelling",
                "suggestedRotes": " Athletics, Science, Survival",
                "reach": [],
                "arcanum": "Space",
                "cost": ""
            },
            {
                "dots": 1,
                "reach": [],
                "description": "     Boundaries and barriers are a lie, but it is sometimes useful to lie. This spell subtly warps space and distance around the subject, making empty spaces seem larger and more foreboding. Crowds of people seem tightly packed together, an impenetrable wall of humanity.\n     Any attempt the subject makes to interact with other people costs 1 Willpower. Even then, any dice pools are penalized by the spell’s Potency. Prolonged exposure to this spell (roughly a day per dot of the subject’s Composure) may provoke breaking points or adverse Conditions like Shaken or Spooked.",
                "name": "Isolation",
                "practice": "Compelling",
                "primaryFactor": "Potency",
                "suggestedRotes": "Academics, Intimidation, Subterfuge",
                "cost": "",
                "arcanum": "Space",
                "withstand": "Composure"
            },
            {
                "description": "     All distance is an illusion. Once this truth is understood, all things are in the same place as the mage, and how can one lose track of herself? As long as the subject of this spell is within 174 chapter four: magic the Area of the spell, she knows its precise location. Short of concealing magic (which provokes a Clash of Wills), no attempt to hide the subject can fool her unerring senses.",
                "dots": 1,
                "name": "Locate Object",
                "cost": "",
                "arcanum": "Space",
                "withstand": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The caster can continue tracking the subject even if it leaves the Area."
                    }
                ],
                "practice": "Knowing",
                "primaryFactor": "Duration",
                "suggestedRotes": "Empathy, Occult, Science"
            },
            {
                "practice": "Unveiling",
                "arcanum": "Space",
                "description": "     If all locations are one, it must follow that all directions are one as well. While this spell is active, the subject can see and hear in all directions and from all points within her sensory range simultaneously. She can see what’s happening behind her, on the far side of a door, or beneath her feet. She cannot perceive things farther away than her normal perceptions might allow, nor can she see through darkness. In essence, it’s as though everything happening around her were spread out on a flat plain, bereft of obstruction. This allows her to cast sensory-range spells on subjects she might not ordinarily be able to perceive.\n     The subject is also nearly impossible to ambush or surprise — barring exceptional camouflage or a tremendous distraction to draw her attention, all such attempts are reduced to a chance die. Finally, the subject may reduce any penalties due to range, cover, or concealment (but not darkness or similar poor visibility) by the spell’s Potency.",
                "dots": 1,
                "suggestedRotes": "Firearms, Investigation, Occult",
                "withstand": "",
                "name": "The Outward and Inward Eye",
                "reach": [
                    {
                        "effect": "The mage may use the spell to see through an existing warp or shortcut through Space; a Distortion Iris, the effects of a Scrying spell, or a magical portal created with Co-Location are all applicable. With additional Arcana based on the nature of the portal, other kinds of Iris may be seen through at the Storyteller’s discretion.",
                        "cost": 2
                    }
                ],
                "cost": "",
                "primaryFactor": "Duration"
            },
            {
                "suggestedRotes": "Larceny, Occult, Subterfuge",
                "cost": "",
                "primaryFactor": "Duration",
                "name": "Borrow Threads",
                "description": "     By changing one’s connection to others, one changes oneself. This spell allows the mage to transfer a number of sympathetic connections equal to the spell’s Potency between herself and the subjects as determined by the spell’s Scale. She can either steal links from her targets or give her own to others. If the mage transfers a link to someone who already has a connection to the same thing, the new connection overwrites the old one for the Duration of the spell. The mage has to be aware of a connection (either through magic or just knowing the subject) to manipulate it.",
                "dots": 2,
                "practice": "Ruling",
                "reach": [
                    {
                        "effect": "The mage may redirect the sympathetic connection between other subjects of the spell directly.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "Instead of transferring sympathetic connections, the mage may copy them."
                    }
                ],
                "withstand": "Connection",
                "arcanum": "Space"
            },
            {
                "description": "     To restrain a willworker is to try to ensnare someone in a lie he does not believe. This spell allows the mage to bypass a single obstacle restricting her subject’s movement: a locked door, a pair of handcuffs, a barred window, etc. The subject “blinks” through the door, or her hands seem to pass right through the handcuffs, or similar effects.\n        This spell can only bypass a physical obstacle obstructing an actual path. The mage can, for example, slip through a roaring fire that blocks the road ahead or across a chasm too wide to jump, but cannot blink through a solid wall. If cast on an inanimate object, the mage or an ally must still carry or push the subject through the obstacle.",
                "practice": "Ruling",
                "cost": "",
                "withstand": "",
                "name": "Break Boundary",
                "arcanum": "Space",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "effect": "The spell allows subjects to fit through narrow or restrictive pathways they would not otherwise pass through, even if the path were not obstructed. For example, casting this spell on a car would allow the mage to drive it inside a house even though it would not fit through the door.",
                        "cost": 1
                    },
                    {
                        "effect": "Subjects pass through obstructions even if they are unable to move, appearing on the other side.",
                        "cost": 2
                    }
                ],
                "dots": 2,
                "suggestedRotes": "Athletics, Larceny, Persuasion"
            },
            {
                "cost": "",
                "arcanum": "Space",
                "practice": "Veiling",
                "reach": [],
                "name": "Lying Maps",
                "description": "     To know how to get from here to there is to tacitly accept the Lie. By means of this spell, the mage twists the subject’s sense of direction, making him certain that the best route from where he is to somewhere else is one the mage desires. She could, for instance, convince the subject that the road to a dangerous Verge is actually the way to his mother’s house, or that the mage’s sanctum is in another part of the city. If the subject actively, carefully navigates using a map or GPS or the like, the navigation roll is a single chance die, and even on a success it feels wrong. (“The map says left, but I swear it’s right!”)",
                "suggestedRotes": "Academics, Politics, Survival",
                "withstand": "Resolve",
                "primaryFactor": "Duration",
                "dots": 2
            },
            {
                "name": "Scrying",
                "reach": [],
                "suggestedRotes": "Computers, Occult, Subterfuge",
                "description": "     By means of this spell, the mage parts the curtain of the Lie and reveals a distant location to her senses. She creates a “window” that allows her to perceive the subject, much like a television screen. When she casts the spell, she may choose whether the spell is one way, or whether people at the location can see back through the window.\n     When casting this spell sympathetically, exactly what the mage sees depends on the sympathetic Yantra she employs. Sympathy to a location shows her a broad overview of the area, analogous to a cinematic wide shot, but one that remains static. Sympathy 175 space to a person or object tends to show a “close up” of the subject — the window will follow the subject if it moves, but the mage may not be able to make out details of where the subject is or who else might be present.\n     When cast on a subject within sensory range, the scrying window gives the mage a view as though she were standing right next to the subject. The mage can move this view around as a reflexive action to view the target from any angle she wants.\n     Casting spells on subjects the mage can see through the window counts as viewing them remotely.\n     Add Fate 2: The mage may make the scrying window selectively one-way, allowing only specific people to perceive her from the other side of the window.",
                "withstand": "",
                "dots": 2,
                "practice": "Ruling",
                "cost": "",
                "arcanum": "Space",
                "primaryFactor": "Duration"
            },
            {
                "suggestedRotes": "Occult, Stealth, Subterfuge",
                "practice": "Veiling",
                "withstand": "",
                "name": "Secret Door",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may specify a Key that allows the Secret Door to be seen."
                    }
                ],
                "cost": "",
                "arcanum": "Space",
                "dots": 2,
                "primaryFactor": "Duration",
                "description": "     Doorways, roads, and portals represent a liminal point between two distinct locations — but if distance is an illusion, there can be no “distinct locations.” This spell cloaks a door, intersection, or similar aperture between two locations, such that one’s mundane perceptions simply slide ride past it. All magical attempts to uncover the door provoke a Clash of Wills."
            },
            {
                "arcanum": "Space",
                "name": "Veil Sympathy",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "Rather than suppressing a sympathetic link, the mage may instead make the subject appear to have a link to someone or something else instead. Attempts to detect the link provoke a Clash of Wills to see through the deception."
                    },
                    {
                        "effect": "The spell prevents the subject from being used as a sympathetic Yantra (p. 122) as well as removing its links; each level of Potency reduces all potential uses of the subject as a Yantra from Material, to Representational, to Symbolic, to suppressing them entirely.",
                        "cost": 1
                    },
                    {
                        "cost": 2,
                        "effect": "The mage may suppress all the subject’s sympathetic links. This effect applies in both directions; not only does the 176 chapter four: magic subject lose his links to loved ones, but those people lose their links to him. The spell is Withstood by the strongest connection the subject has."
                    }
                ],
                "suggestedRotes": "Politics, Subterfuge, Survival",
                "withstand": "Sympathy (Connection)",
                "primaryFactor": "Duration",
                "cost": "",
                "practice": "Veiling",
                "description": "     A magician’s sympathetic connections allow her to reach out beyond herself, but they are also an avenue by which her enemies can attack her. This spell conceals one of the subject’s sympathetic links, chosen by the mage from those she is aware of. Any attempt to uncover or use the link provokes a Clash of Wills.",
                "dots": 2
            },
            {
                "cost": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may specify a Key that allows use of Space magic on the Warded subject."
                    },
                    {
                        "cost": 2,
                        "effect": "The mage may cast Ward upon an Iris (p. 243) or its Key, preventing the Iris from opening while the Ward remains in effect. Supernatural powers opening the Iris provoke a Clash of Wills."
                    }
                ],
                "suggestedRotes": "Athletics, Subterfuge, Weaponry",
                "withstand": "",
                "primaryFactor": "Duration",
                "arcanum": "Space",
                "name": "Ward",
                "description": "     Space is mutable, until a magician wills otherwise. Cast on an area or individual subjects, this spell locks its subject down, preventing the space within from being manipulated. Magic that uses the sympathy of Warded subjects or attempts to warp Warded areas provokes a Clash of Wills. The mage is aware when one of her Wards is attacked.",
                "practice": "Shielding",
                "dots": 2
            },
            {
                "name": "Ban",
                "dots": 3,
                "suggestedRotes": "Intimidation, Science, Stealth",
                "cost": "",
                "description": "     In the quest for self-knowledge, it is sometimes useful to cut oneself off from the outer world so that one can understand that the world is contained within. By means of this spell, the mage inverts an area of space, such that nothing inside the space can get out and nothing outside the space can get in. Try to step in and you find yourself on the far side, carried in a single step. Try to get out and you’re just stepping right back in again. Magic that manipulates space, like a teleportation power or the ability to step from one world to another, provokes a Clash of Wills to allow ingress or egress.\n     Even light and air can’t pass through: From the outside, the space appears to “lens” as the observer approaches it, as light jumps directly across the Ban. From inside, it’s an island of light in a vast sea of darkness.\n     Add Any Arcanum 2: Either exclude one or more phenomena under the Arcanum’s purview from the spell (for example, to let air or light through) or create a Ban that only prohibits phenomena under that Arcanum’s purview.",
                "primaryFactor": "Duration",
                "withstand": "",
                "reach": [],
                "arcanum": "Space",
                "practice": "Weaving"
            },
            {
                "name": "Co-Location",
                "description": "     Where lesser spells merely distort the Lie that all things are separate, this spell attacks it directly. The mage smears the distance between a number of locations equal to the spell’s Potency, causing them to overlap temporarily. The mage must employ the Sympathetic Range Attainment to overlap locations outside of her sensory range.\n     Only mages using Active Mage Sight with Space can perceive the overlap, seeing it as a confusing jumble of translucent images constantly interpenetrating each other; to others within the affected areas everything seems normal. The spell’s Scale factor determines how large each overlapped area can be.\n     Each turn, as a reflexive action, anyone capable of perceiving the overlap may “move” an object, person, or other being she is touching (including herself, if desired) from one location to another, effectively teleporting it from place to place. Those capable of seeing the overlap can touch things in any of the co-located areas, but can otherwise only interact with the location they are physically in. The other location counts as being viewed remotely for purposes of further spellcasting, and individuals may not attack people in different locations.\n     Objects cannot be teleported into other objects with this spell.",
                "cost": "",
                "suggestedRotes": "Athletics, Firearms, Science",
                "reach": [
                    {
                        "effect": "The mage can make anything in the overlapped locations visible. She may specify any individual object or person, or just make an entire location appear as she wishes. The contents of locations remain insubstantial to one another, however anyone may “move” an object he can see over, not only individuals with Space senses",
                        "cost": 1
                    },
                    {
                        "effect": "The mage can restrict the co-location to a two-dimensional plane, creating a stable portal between two locations. Anyone capable of perceiving the portal may pass through it. It is invisible by default, but by combining this with the above Reach effect the mage may make it visible and useable by individuals without Space senses.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The mage may specify a Key needed to use the overlap"
                    },
                    {
                        "effect": "Individuals capable of perceiving the overlap may reflexively switch locations twice per turn.",
                        "cost": 2
                    }
                ],
                "arcanum": "Space",
                "practice": "Fraying",
                "primaryFactor": "Duration",
                "withstand": "",
                "dots": 3
            },
            {
                "cost": "",
                "suggestedRotes": "Academics, Empathy, Larceny",
                "withstand": "",
                "description": "     To possess true Sympathy toward something is to be nearly indistinguishable from it. With this spell, the subject becomes so like those with whom she has sympathy that she finds it trivial to predict them. When the subject takes an action whose subject is one of her Strong sympathetic connections (e.g. social 177 space interaction, guessing what he’ll do in a certain situation, etc.), she gains 8-Again on her roll.",
                "dots": 3,
                "name": "Perfect Sympathy",
                "arcanum": "Space",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject’s sympathetic connection is so great that it can fool even magic. When the subject of Perfect Sympathy is the target of a spell using the Sympathetic Range Attainment, it provokes a Clash of Wills. If the mage succeeds, she may redirect the spell’s effects to one of the subject’s Strong sympathetic connections instead."
                    },
                    {
                        "effect": "For one point of Mana, the subject gains the rote action quality on a number of actions equal to the spell’s Potency, as long as those actions affect one of her Strong sympathetic connections.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The benefits of this spell extend to the subject’s Medium sympathetic connections."
                    }
                ],
                "primaryFactor": "Duration",
                "practice": "Perfecting"
            },
            {
                "cost": "",
                "suggestedRotes": "Athletics, Brawl, Medicine",
                "arcanum": "Space",
                "description": "     The mage twists the space her subject occupies, torquing joints, bruising flesh, and tearing muscle. This is an attack spell; its damage rating is equal to the spell’s Potency, and it inflicts bashing damage.",
                "name": "Warp",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The pain of the attack is such that the victim gains the Arm Wrack or Leg Wrack Tilt."
                    }
                ],
                "dots": 3,
                "primaryFactor": "Potency",
                "withstand": "",
                "practice": "Fraying"
            },
            {
                "arcanum": "Space",
                "primaryFactor": "Duration",
                "practice": "Perfecting",
                "suggestedRotes": "Crafts, Empathy, Persuasion",
                "withstand": "Composure",
                "name": "Web-Weaver",
                "description": "     We all leave tiny, nigh-imperceptible webs of sympathy behind us wherever we go. With this spell, the mage may bolster such a web into a useful sympathetic link. Each level of Potency bolsters a single sympathetic connection by one “step,” from Weak to Medium, Medium to Strong. The mage can step up a nonexistent connection to a Weak one, but only if the subject of the spell has been in contact with the desired focus within the last turn. For example, a person likely has no sympathetic connection to the soda cup from her lunch, but as long as it’s in her hand, the mage can use the faint sympathy created by physical contact to make the cup a sympathetic connection.\n     Add Time 2: The mage can employ Temporal Sympathy (p. 193) to bolster nonexistent connections to anything the subject touched in the target time.",
                "dots": 3,
                "reach": [],
                "cost": ""
            },
            {
                "practice": "Patterning",
                "cost": "",
                "withstand": "",
                "name": "Alter Direction",
                "description": "     “Direction” is nothing more than a vector between two points. With this spell, the mage overwrites that concept, letting her define her path as anything she desires.\n     When cast on an area, this spell allows her to change a number of absolute directions (e.g. north, south, up, down) equal to the spell’s Potency. She might redefine “down” as “up,” causing anything not rooted to the ground to fall into the sky, or redefine “north” as “south by southwest,” causing compasses to point the wrong way. Objects entering the area at speed find their direction of travel and momentum abruptly altered, which may require a Dexterity + Athletics or Drive roll to maintain control. This change isn’t necessarily reciprocal; if the mage decrees that north is south, that doesn’t mean that south is north — rather, it is impossible for anyone in the area to go north.\n     Alternately, the mage may cast this spell on a specific subject and change a direction relative to that subject. She might redefine her own personal “down” as “the direction my feet are pointing,” allowing her to walk on walls or ceilings, or redefine an attacker’s “forward” as “toward the person holding the gun” before he shoots her.",
                "primaryFactor": "Duration",
                "arcanum": "Space",
                "suggestedRotes": "Academics, Firearms, Persuasion",
                "dots": 4,
                "reach": [
                    {
                        "effect": "The mage can redefine directions as curves, loops, or other shapes beyond a simple straight line. This might allow her to cause anyone walking straight ahead to move in an endless circle, or trace a “straight” path for her bullets that weaves around obstacles and friendlies. Apply the spell’s Potency as a bonus or penalty to relevant actions.",
                        "cost": 1
                    }
                ]
            },
            {
                "withstand": "",
                "suggestedRotes": "Academics, Firearms, Intimidation",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "For one point of Mana, the damage is aggravated"
                    },
                    {
                        "effect": "The co-located object remains inside the subject, preventing natural or magical healing of the wound until it’s surgically excised or ripped out.",
                        "cost": 1
                    }
                ],
                "arcanum": "Space",
                "cost": "",
                "dots": 4,
                "description": "     While lesser magic can blur the distinction between locations, this spell can destroy them outright. The mage forces her subject to momentarily occupy the same space as another object, with catastrophic effects. This is an attack spell; its damage rating is equal to the spell’s Potency, and it inflicts lethal damage. Collapsing multiple subjects into each other, thereby damaging them all, is an application of increased Subject Factor.",
                "primaryFactor": "Potency",
                "practice": "Unraveling",
                "name": "Collapse"
            },
            {
                "cost": "",
                "arcanum": "Space",
                "suggestedRotes": "Persuasion, Politics, Weaponry",
                "dots": 4,
                "withstand": "Sympathy (Connection)",
                "description": "     Isolation is the beginning of understanding. This spell destroys one of the subject’s sympathetic links (additional connections can be severed by increasing the number of subjects with the Scale factor). This effect is Lasting, but normal interactions may restore the links in time, as described on p. 172.",
                "reach": [
                    {
                        "effect": "The mage may remove the subject’s sympathetic name. This effect is not Lasting; the name returns when the spell’s Duration expires.",
                        "cost": 2
                    }
                ],
                "name": "Cut Threads",
                "practice": "Unraveling",
                "primaryFactor": "Potency"
            },
            {
                "withstand": "",
                "cost": "",
                "reach": [],
                "primaryFactor": "Duration",
                "suggestedRotes": "Expression, Science, Survival",
                "arcanum": "Space",
                "practice": "Patterning",
                "description": "     Volume is a product of dimension, and dimension is merely an expression of distance in three dimensions. This spell allows the mage to manipulate those axes, making a space much larger or smaller than should be possible. A cramped studio apartment can become a spacious loft, or a town square can be made the size of a closet. Subjects crushed by a shrinking space too small for them take lethal damage equal to the spell’s Potency and are forcibly ejected from the space.\n     The Scale spell factor must encompass the area as it exists before the spell acts. The subject space’s volume is increased or decreased a number of steps along the Area Scale factor table equal to the spell’s Potency. Anyone or anything within the expanded space when the spell runs out simply appears outside the original, unaltered space.",
                "name": "Secret Room",
                "dots": 4
            },
            {
                "arcanum": "Space",
                "name": "Teleportation",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage can “swap” the location of two subjects with no more than one point of Size difference."
                    },
                    {
                        "cost": 2,
                        "effect": "The mage can now cast the spell with two separate Sympathetic Ranges, teleporting subjects without being present for either end of the journey. The spell is Withstood by the worse Sympathetic link."
                    }
                ],
                "withstand": "",
                "description": "     By means of this spell, the mage transforms her subject’s current location, effectively moving it from point to point without crossing the intervening space. She can, for example, summon a subject to her from anywhere in the world, banish someone to the outer reaches of Siberia, or teleport herself. By default, the subject’s current location and destination must both be within sensory range, but the mage may employ the Sympathetic Range Attainment on one of them.\n     Add Death 2, Sprit 2, etc: By adding 2 in an Arcanum whose purview includes another realm of existence (e.g. the Underworld or the Shadow), the mage may move things from that realm into the physical world, or vice versa.",
                "practice": "Patterning",
                "primaryFactor": "Potency",
                "suggestedRotes": "Larceny, Persuasion, Science",
                "cost": "",
                "dots": 4
            },
            {
                "withstand": "Connection of desired link",
                "arcanum": "Space",
                "suggestedRotes": "Empathy, Persuasion, Politics",
                "cost": "",
                "practice": "Making",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The sympathetic connections created are Lasting, and will never fade. Only magic can sever them. This can have dramatic, long-term psychological repercussions on a subject, as he is effectively never able to emotionally let go."
                    },
                    {
                        "cost": 2,
                        "effect": "The mage may apply a new sympathetic name to the subject, which does not replace the original. This effect is not Lasting, and fades when the spell’s Duration ends."
                    }
                ],
                "name": "Create Sympathy",
                "dots": 5,
                "primaryFactor": "Potency",
                "description": "     To a Master of Space, powerful connections are forged as easily as snapping one’s fingers. With this spell, the mage creates a new sympathetic connection on the subject. These new connections are Lasting, but can fade with time as described on p. 172."
            },
            {
                "primaryFactor": "Duration",
                "description": "     To leave behind attachments is the truest sign of freedom. For the Duration of this spell, the subject leaves no sympathetic traces behind. She cannot forge sympathetic connections, and even blood, hair, and the like shed during the spell’s Duration do not link back to her. Her Space spells leave no tell-tale ripples in the Tapestry. Any attempt to scrutinize her Space magic or previously-created sympathetic connections with Mage Sight (see p. 92) add the spell’s Potency to the Mystery’s Opacity.",
                "withstand": "",
                "dots": 5,
                "name": "Forge No Chains",
                "cost": "",
                "practice": "Unmaking",
                "reach": [],
                "suggestedRotes": "Occult, Subterfuge, Survival",
                "arcanum": "Space"
            },
            {
                "arcanum": "Space",
                "description": "     The mage creates a space outside of space, one ideally suited to serve as a sanctum — or a prison. Without the addition of other Arcana, this space is devoid of any identifiable features, dimensions, or boundaries. It has no Time, so anything within it is held in stasis, unaging (but also unhealing and never growing or improving). It has no Death or Spirit, so Twilight doesn’t exist within it. It is, in essence, a space whose only definition is that it is a space. Someone within the dimension can walk forever in any direction, but when she turns back she finds herself only as far as the boundary of the spell’s Area Factor.\n     The Pocket Dimension is divorced from physical reality; unless the mage chooses to anchor the realm to a point in the world, the only way to reach it is to teleport there. Spells cast within the Pocket Dimension do not incur Paradox, unless they are cast sympathetically on someone outside the Pocket Dimension. The mage counts as a material sympathetic Yantra for her own Pocket Dimension.\n     If the Pocket Dimension is ever destroyed, or if its Duration expires, everything inside reappears in the world at the exact location from which it or they entered the Dimension.\n     Add Time 2: Time flows normally within the pocket dimen￾sion, matching the flow of Time in the material realm. Wise 179 spirit mages supplement this conjunction with Matter spells or similar effects to ensure a continuous air supply.\n     Add Death 2, Mind 2, or Spirit 2: The Pocket Dimension includes Twilight for entities attuned to the Arcanum added.",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may create an Iris to the Pocket Dimension in the material realm, allowing anyone to enter and leave it. For an additional Reach, she may specify a Key for the Iris."
                    }
                ],
                "cost": "",
                "name": "Pocket Dimension",
                "practice": "Making",
                "primaryFactor": "Duration",
                "withstand": "",
                "suggestedRotes": "Crafts, Expression, Survival",
                "dots": 5
            },
            {
                "reach": [
                    {
                        "effect": "The mage may specify a Key that allows access to and from the Quarantined area.",
                        "cost": 1
                    }
                ],
                "arcanum": "Space",
                "primaryFactor": "Duration",
                "name": "Quarantine",
                "suggestedRotes": "Academics, Larceny, Socialize",
                "description": "      paths from it to the rest of the world and vice versa. For all intents and purposes, the subject simply ceases to exist and reality “fills in” to adjust. A Quarantined house doesn’t leave behind an empty lot; rather, its two neighboring houses suddenly find themselves adjacent. A building with a Quarantined 12th floor appears to only have 11 stories — though the elevator has a “12” button, it doesn’t do anything.\n     Those inside the Quarantined area find that they cannot leave \n     — any attempt to do so simply loops back through whatever door they passed through. They are, in effect, in a Pocket Dimension \n     — albeit one that, because it is actually an excised piece of the Fallen World, possesses its own Time, Twilight, and so forth.\n     Add Mind 4: For as long as the Quarantine exists, no one remembers that the Quarantined area, or anyone caught within it, exists. Memories are altered as necessary (so the new neighbors remember always being neighbors, and the office workers are sure the “12” button in the elevator was a weird construction gaffe and there never was an advertising firm on 12, and so on).\n     Add Time 5: For as long as the Quarantine lasts, not only is the targeted area excised from space, it retroactively never existed at all. Any influence it, or anyone inside, had on the world is either undone or was caused by someone else. Normal history reasserts itself when the spell ends.",
                "cost": "",
                "withstand": "",
                "practice": "Unmaking",
                "dots": 5
            }],
            spirit: [{
                "cost": "",
                "name": "Coaxing the Spirits",
                "arcanum": "Spirit",
                "suggestedRotes": "Politics, Athletics, Expression",
                "withstand": "Composure or Rank",
                "dots": 1,
                "description": "     Though most spirits are but slumbering motes that have no will or sapience, the mage may coax them to brief activity in accordance with their natures. She may compel the spirit (or its physical representation) to take a single instant action in accordance with its nature. A frightened animal might attack or flee, a car might start up, or a cliff face might start a small avalanche. The spell is Withstood by the Rank of the spirit coaxed or the Composure of a living representation, whichever is higher.",
                "primaryFactor": "Potency",
                "practice": "Compelling",
                "reach": []
            },
            {
                "dots": 1,
                "arcanum": "Spirit",
                "withstand": "",
                "primaryFactor": "Duration",
                "description": "     The first spell most Spirit mages learn, this spell allows the mage to perceive and speak with spirits in the physical world, whether they are roaming freely in Twilight, slumbering within an object (including discorporated spirits in hibernation), or possessing a living being. She can also sense any spirit-related Manifestation Conditions in the area. Finally, she can see the conduit of any spirit with the Reaching Manifestation, but cannot communicate across the Gauntlet.\n     Add Death 1 or Mind : These benefits extend to ghosts or Goetia, respectively.",
                "cost": "",
                "practice": "Unveiling",
                "name": "Exorcist’s Eye",
                "suggestedRotes": "Occult, Survival, Socialize",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may shift her perceptions to see across the Gauntlet and into the Shadow (or into the physical world if she’s in the Shadow). The spell is Withstood by the Gauntlet Strength."
                    }
                ]
            },
            {
                "description": "     Just as the spirit of an object can be coaxed to help, it may also be coaxed to hinder. When a character fails a roll using this spell’s subject as equipment, the spell converts the failure into a dramatic failure. The spell converts a number of failures equal to its Potency. If the object’s user is a player’s character, the player gains a Beat as normal.",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "As long as the object is within sensory range, the mage can choose which failures become dramatic failures."
                    }
                ],
                "cost": "",
                "suggestedRotes": "Larceny, Politics, Subterfuge",
                "practice": "Compelling",
                "name": "Gremlins",
                "dots": 1,
                "primaryFactor": "Potency",
                "withstand": "",
                "arcanum": "Spirit"
            },
            {
                "name": "Invoke Bane",
                "arcanum": "Spirit",
                "cost": "",
                "withstand": "Rank",
                "description": "     The spirits know what causes them pain, and avoid it at all costs. This spell forces a spirit to avoid its Bane even more assiduously than normal. The spirit must spend a point of Willpower to even come within the area of influence of its Bane (described by the Area factor of the spell), and cannot touch it at all. If the spirit is already within the proscribed area and fails the roll, it must flee immediately. This spell does not affect spirits above Rank 5.",
                "dots": 1,
                "reach": [],
                "primaryFactor": "Duration",
                "practice": "Compelling",
                "suggestedRotes": "Brawl, Intimidation, Occult"
            },
            {
                "arcanum": "Spirit",
                "name": "Know Spirit",
                "dots": 1,
                "description": "     To command the spirits, one must first understand them. This spell allows the mage to glean a number of the following facts about a spirit equal to the Spell’s Potency:\n     - What is the spirit’s name? \n     - What is its Rank? \n     - What Manifestations does it possess? \n     - What Numina does it possess? \n     - What are its Influences, and roughly how strong are they? \n     - What is its Ban or Bane?",
                "primaryFactor": "Potency",
                "reach": [],
                "suggestedRotes": "Academics, Brawl, Socialize",
                "withstand": "Rank",
                "practice": "Knowing",
                "cost": ""
            },
            {
                "dots": 2,
                "practice": "Shielding",
                "name": "Cap the Well",
                "cost": "",
                "arcanum": "Spirit",
                "withstand": "",
                "reach": [],
                "primaryFactor": "Duration",
                "description": "     Any creature becomes more pliable when its food source is controlled. This spell wards a source of Essence, making it difficult for spirits to feed from it — but not harder to sense. Any attempt by a spirit to feed on the Essence (or a mage, werewolf, or other being to siphon the Essence) provokes a Clash of Wills.",
                "suggestedRotes": "Politics, Survival, Persuasion"
            },
            {
                "suggestedRotes": "Occult, Persuasion, Survival",
                "practice": "Ruling",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may siphon Essence directly from a spirit, though the spirit may Withstand the spell with Rank."
                    }
                ],
                "arcanum": "Spirit",
                "dots": 2,
                "name": "Channel Essence",
                "description": "     A wise master knows that sometimes she must reward rather than punish. This spell allows the mage to draw Essence into her Pattern from a Resonant Condition or channel Essence to a spirit or suitable receptacle. The mage may transfer an amount of Essence equal to the spell’s Potency. However, she 181 spirit cannot channel more Essence per turn than her Gnosis-derived Mana per turn rate.\n     Essence stored within the mage’s Pattern remains even after the Duration expires; however, she can only hold a combined amount of Mana and Essence equal to her Gnosis-derived maximum Mana.\n     Add Death 2 or Mind 2: The spell may be cast on a ghost or Goetia.",
                "withstand": "",
                "primaryFactor": "Potency",
                "cost": ""
            },
            {
                "withstand": "Rank",
                "arcanum": "Spirit",
                "description": "     Sometimes the gentle approach must give way to raw dominance. This spell allows the mage to command a spirit to undertake a number of actions equal to the spell’s Potency. This compulsion only lasts as long as the spell’s Duration, so the spirit might abandon an indefinite or extended action when the spell’s Duration wears off. Commands that go against the spirit’s self-interest (including abandoning a host or Fetter) provoke a Clash of Wills. This spell has no effect on spirits above Rank 5.",
                "reach": [],
                "primaryFactor": "Potency",
                "cost": "",
                "practice": "Ruling",
                "suggestedRotes": "Medicine, Athletics, Persuasion",
                "dots": 2,
                "name": "Command Spirit"
            },
            {
                "cost": "",
                "suggestedRotes": "Animal Ken, Medicine, Stealth",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The protection afforded by this spell extends to spirits’ physical attacks."
                    }
                ],
                "arcanum": "Spirit",
                "description": "     To master the spirit world, one must show no vulnerability. This spell protects the subject against the Numina, Influences, and Manifestations of spirits, Spirit spells, and any spiritual powers of other supernatural creatures such as werewolves. Such attacks must succeed at a Clash of Wills to harm the subject.",
                "name": "Ephemeral Shield",
                "primaryFactor": "Duration",
                "withstand": "",
                "dots": 2,
                "practice": "Shielding"
            },
            {
                "arcanum": "Spirit",
                "name": "Gossamer Touch",
                "description": "     Sometimes the only way to command a spirit is with raw, brute force. This spell renders the subject’s flesh solid to spirits in Twilight, allowing her to interact with them physically.\n     Add Death 2 or Mind 2: These benefits extend to ghosts or Goetia, respectively.",
                "withstand": "",
                "cost": "",
                "dots": 2,
                "suggestedRotes": "Brawl, Crafts, Intimidation",
                "practice": "Ruling",
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "Any object the mage carries is similarly solid to Twilight spirits."
                    },
                    {
                        "effect": "The mage shapes her body into a powerful tool against the spirits. Her unarmed attacks against spirits count as a weapon with a damage modifier equal to the spell’s Potency.",
                        "cost": 1
                    }
                ]
            },
            {
                "suggestedRotes": "Athletics, Computers, Socialize",
                "name": "Opener of the Way",
                "arcanum": "Spirit",
                "dots": 2,
                "reach": [],
                "primaryFactor": "Duration",
                "practice": "Ruling",
                "cost": "",
                "withstand": "",
                "description": "     The shaman is not only intercessor, but also gatekeeper. This spell allows the mage to shift the Resonant Condition on the subject to the Open Condition, or vice versa."
            },
            {
                "suggestedRotes": "Occult, Stealth, Streetwise",
                "description": "     Sometimes the lords of shadow must walk unseen among their prey. This spell shrouds the subject from the notice of spirits and Spirit magic. Any supernatural effect that would detect her provokes a Clash of Wills.",
                "practice": "Veiling",
                "withstand": "",
                "cost": "",
                "reach": [],
                "dots": 2,
                "arcanum": "Spirit",
                "name": "Shadow Walk",
                "primaryFactor": "Duration"
            },
            {
                "reach": [],
                "primaryFactor": "Duration",
                "arcanum": "Spirit",
                "cost": "",
                "name": "Slumber",
                "dots": 2,
                "suggestedRotes": "Expression, Occult, Weaponry",
                "practice": "Ruling",
                "withstand": "Rank",
                "description": "     A fool exhausts herself trying to kill what cannot die; better to send hostile spirits into a deep sleep. This spell reduces the frequency with which a spirit that is hibernating after being destroyed (see p. 257) regains Essence. Instead of regaining one point of Essence per day, it regains one point of Essence every (Potency) days; but the effect still ends when the spell’s Duration expires."
            },
            {
                "name": "Bolster Spirit",
                "practice": "Perfecting",
                "description": "     The mouse who plucks the thorn is often more respected than the roaring lion. Each level of Potency of this spell heals a spirit of two boxes of bashing damage.",
                "dots": 3,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "In lieu of healing damage, the mage may expend one Potency to increase one of the spirit’s Attributes by +1 for the Duration of the spell. The spirit’s Rank-derived Attribute maximum still applies."
                    },
                    {
                        "cost": 2,
                        "effect": "The mage may spend one Mana to increase the spirit’s Rank by 1, increasing its maximum Attribute levels and Essence pool, as well as awarding it one new Numen."
                    }
                ],
                "arcanum": "Spirit",
                "suggestedRotes": "Medicine, Occult, Expression",
                "withstand": "",
                "cost": "",
                "primaryFactor": "Potency"
            },
            {
                "dots": 3,
                "practice": "Fraying",
                "reach": [
                    {
                        "effect": "Any future attempt to reestablish the same Resonant Condition while the spell is in effect is penalized by Potency.",
                        "cost": 1
                    }
                ],
                "suggestedRotes": "Crafts, Brawl, Intimidation",
                "withstand": "",
                "arcanum": "Spirit",
                "primaryFactor": "Duration",
                "cost": "",
                "name": "Erode Resonance",
                "description": "     Sometimes a healer must cut out diseased flesh so that the whole may heal. This spell removes the Open or Resonant condition on its target entirely. The effect is Lasting."
            },
            {
                "description": "     With this spell the mage calls forth a torrent of Essence from the spirit world, which buffets her foes and leaves them drained in body and soul. This is an attack spell; its damage rating is equal to the spell’s Potency, and it inflicts bashing damage. This spell can target physical beings or spirits in Twilight.",
                "cost": "",
                "withstand": "",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject becomes more vulnerable to spiritual predation: she gains the Open condition."
                    },
                    {
                        "effect": "The spell can target beings on the other side of the Gauntlet, but is Withstood by the Gauntlet Strength.",
                        "cost": 1
                    }
                ],
                "dots": 3,
                "arcanum": "Spirit",
                "name": "Howl From Beyond",
                "practice": "Fraying",
                "suggestedRotes": "Expression, Firearms, Medicine"
            },
            {
                "description": "     Even the mightiest shaman needs a place to sleep safely, and a place to do her workings where the wall between worlds is thin. This spell allows the mage to either raise or lower the local Gauntlet Strength by an amount equal to the spell’s Potency within the spell’s Area.",
                "cost": "",
                "primaryFactor": "Potency",
                "dots": 3,
                "name": "Place of Power",
                "practice": "Fraying or Perfecting",
                "suggestedRotes": "Academics, Expression, Survival",
                "arcanum": "Spirit",
                "withstand": "Gauntlet Strength",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may alter the Gauntlet independently on either side. She might, for example, reduce the Gauntlet rating from the material side while raising it on the Shadow side."
                    }
                ]
            },
            {
                "arcanum": "Spirit",
                "cost": "",
                "practice": "Weaving",
                "suggestedRotes": "Athletics, Medicine, Socialize",
                "withstand": "Gauntlet Strength",
                "description": "     The Spirit mage is a being of two worlds. With this spell, the mage may interact physically and magically with things on the far side of the Gauntlet, whichever realm she is in.",
                "dots": 3,
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage opens an Iris between the physical world and the Shadow, which anyone or anything can pass through. The Scale factor determines how big the Iris is. By adding another Reach, the mage may restrict access to the Iris by means of a Key."
                    }
                ],
                "name": "Reaching"
            },
            {
                "cost": "",
                "primaryFactor": "Potency",
                "withstand": "Rank",
                "practice": "Perfecting",
                "dots": 3,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "For each Reach applied, the spirit wakes with one additional Corpus box cleared."
                    }
                ],
                "description": "     What slumbers can always be awoken. This spell can also rouse a hibernating spirit prematurely. The Potency required for this effect is the difference between the spirit’s current Essence and its total Corpus. The spirit awakens immediately, with only its rightmost Corpus box cleared.",
                "suggestedRotes": "Athletics, Expression, Investigation",
                "arcanum": "Spirit",
                "name": "Rouse Spirit"
            },
            {
                "withstand": "Rank",
                "cost": "",
                "reach": [
                    {
                        "cost": 1,
                        "effect": " The spell also creates the Open Condition on the area, even if it does not match the spirit’s Resonance."
                    },
                    {
                        "cost": 1,
                        "effect": "The mage may give the spirit a single, one-word command to follow. The spirit is not compelled to complete a task if it cannot finish the command before the Duration of the spell elapses."
                    },
                    {
                        "effect": "The mage may summon spirits from across the Gauntlet. If she is in the vicinity of an open Iris to the other side, the spell functions as normal. If not, the spell is Withstood by the greater of Rank or the Gauntlet Strength. Spirits may only cross the Gauntlet if they have the ability to do so.",
                        "cost": 1
                    },
                    {
                        "effect": "The mage may give the spirit a complex command to follow. The command must be a single task, but the mage can describe the task within a sentence or two.",
                        "cost": 2
                    }
                ],
                "dots": 3,
                "name": "Spirit Summons",
                "description": "     The mage sends out a call to the nearest spirit within her sensory range. Conversely she can summon spirits she knows personally. She may send a general call and the nearest spirit will answer, or she can specify the type of spirit by Resonance. The spell does not work on spirits above Rank 5.",
                "suggestedRotes": "Persuasion, Socialize, Occult",
                "practice": "Perfecting",
                "arcanum": "Spirit",
                "primaryFactor": "Duration"
            },
            {
                "description": "     This spell strips a spirit of its ability to act in the world, reminding it of its place. This spell strips a number of Manifestation Conditions from the spirit (or its host) equal to the spell’s Potency. The effect is Lasting, but the spirit may use its Influences and Manifestations to reestablish the Conditions as normal. This spell does not work on spirits above Rank 5.\n     Add Death 4 or Mind 4: The spell’s effects extend to ghosts or Goetia.",
                "withstand": "Rank",
                "cost": "",
                "dots": 4,
                "practice": "Unraveling",
                "arcanum": "Spirit",
                "name": "Banishment",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The target cannot attempt to recreate the destroyed Conditions on the same victim or location until the spell’s Duration elapses."
                    }
                ],
                "suggestedRotes": "Brawl, Expression, Occult"
            },
            {
                "primaryFactor": "Duration",
                "dots": 4,
                "description": "     What shows mastery more than a leash? With this spell, the mage may bind a spirit to the world, granting it a Manifestation Condition (see p. 258). The mage may grant a number of Conditions equal to the spell’s Potency, and must create any prerequisite Conditions as well, if they aren’t already present. The entity immediately enters the Manifestation of the mage’s choice, and may not leave it while the spell remains in effect. This spell does not work on spirits above Rank 5.\n     Add Death 4 or Mind 4: The spell’s effects extend to ghosts or Goetia.",
                "practice": "Patterning",
                "suggestedRotes": "Crafts, Brawl, Intimidation",
                "withstand": "Rank",
                "name": "Bind Spirit",
                "reach": [],
                "arcanum": "Spirit",
                "cost": ""
            },
            {
                "dots": 4,
                "reach": [],
                "description": "     A vanquished foe can be a useful tool. This spell allows the mage to bind a hibernating spirit into a fetish, a kind of magical item. Fetishes work like an Imbued Items, save that a fetish is powered by Essence and, instead of holding a Supernal spell, it holds one of the bound spirit’s Influences and, possibly, some of its Numina.\n     Creating a fetish requires that the spell have one Potency per dot of Influence the object will possess, plus one Potency per Numen. A fetish doesn’t have to host all of the spirit’s abilities. Activating the powers within the fetish is an instant action and uses the spirit’s dice pool. The fetish has its slumbering spirit’s Essence pool and can recharge Essence in a Resonant location just like a hibernating spirit, or it can receive Essence from another spirit or via Channel Essence (see p. 180) or similar magic.\n     The fetish’s user can pay Essence out of the fetish’s pool to power its abilities. If the bound spirit ever acquires Essence equal to its Corpus, however, the spell ends immediately.\n     The mage may also create a much simpler fetish that hosts no spirit, but can hold Essence. Such a fetish holds 10 Essence, plus a number of Essence equal to the spell’s Potency. Triggering the bound spirit’s Ban or Bane immediately destroys the fetish.",
                "practice": "Patterning",
                "primaryFactor": "Duration",
                "suggestedRotes": "Crafts, Occult, Persuasion",
                "arcanum": "Spirit",
                "withstand": "Rank",
                "cost": "",
                "name": "Craft Fetish"
            },
            {
                "reach": [],
                "arcanum": "Spirit",
                "primaryFactor": "Duration",
                "cost": "",
                "name": "Familiar",
                "withstand": "",
                "dots": 4,
                "description": "     The mage creates a Familiar bond between a spirit and a mage, who must both be subjects of the spell. The spirit may not be greater than Rank 2. The mage gains the Familiar Merit and the spirit the Familiar Manifestation Condition for the Duration of the spell. Both parties must be willing, and can end the bond whenever they wish.\n        Substitute Death 4 or Mind 4 The mage may bind a ghost or a Goetia as a familiar instead.",
                "suggestedRotes": "Athletics, Expression, Intimidate",
                "practice": "Patterning"
            },
            {
                "description": "     The mage calls forth a writhing torrent of ephemera, raw Essence, and half-formed spirits, which tears into her foes with gleeful abandon. This is an attack spell; its damage rating is equal to the spell’s Potency, and it inflicts lethal damage. This spell can target physical beings or spirits in Twilight.",
                "cost": "",
                "arcanum": "Spirit",
                "dots": 4,
                "reach": [
                    {
                        "effect": "For one point of Mana, the spell inflicts aggravated damage.",
                        "cost": 1
                    },
                    {
                        "effect": "The mage may divide the spell’s Potency between damage rating and destroying Essence contained in the target’s Pattern.",
                        "cost": 1
                    },
                    {
                        "effect": "1 Potency destroys 1 Essence.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The target becomes more vulnerable to spiritual predation: she gains the Open condition. +1 Reach: The spell can target beings on the other side of the Gauntlet."
                    }
                ],
                "practice": "Unraveling",
                "withstand": "",
                "name": "Shadow Scream",
                "primaryFactor": "Potency",
                "suggestedRotes": "Expression, Firearms, Medicine"
            },
            {
                "withstand": "Rank",
                "practice": "Patterning",
                "name": "Shape Spirit",
                "reach": [
                    {
                        "effect": "For one Mana, the spell may heal aggravated damage.",
                        "cost": 1
                    }
                ],
                "primaryFactor": "Potency",
                "suggestedRotes": "Crafts, Medicine, Persuasion",
                "arcanum": "Spirit",
                "dots": 4,
                "description": "     When no tool is ready to hand, the shaman shapes one from what is available. This spell allows the mage to reshape a spirit’s fundamental nature. She may invoke a number of the following effects equal to the spell’s Potency:\n     - Change the spirit’s fundamental nature; for example, making a mouse spirit into a spirit of bad luck and mischief. \n     - Redistribute the spirit’s Attribute dots. \n     - Heal one box of lethal damage from the spirit’s Corpus. \n     - Redefine and redistribute the spirit’s Influences. \n     - Add, remove, or replace one Manifestation. - Add, remove, or replace one Numen. \n     - Rewrite the spirit’s Ban and Bane.\n     She can also alter the spirit’s size, shape, and appearance as she sees fit, within the limits of the spell’s Scale factor. The spirit’s new traits must stay within its Rank-derived maximums. When the spell’s Duration expires, the spirit returns to its original form and capabilities.",
                "cost": ""
            },
            {
                "suggestedRotes": "Occult, Subterfuge, Survival",
                "description": "     To go unnoticed, the tiger must sometimes change her stripes. This spell causes the subject (and anything she’s wearing or carrying, if applicable) to turn into Spirit-attuned ephemera, placing her in Twilight.",
                "cost": "",
                "practice": "Patterning",
                "arcanum": "Spirit",
                "withstand": "",
                "dots": 4,
                "name": "Twilit Body",
                "reach": [
                    {
                        "effect": "The subject’s ephemeral form is so refined she can cast this spell and become immaterial even in realms where Twilight normally doesn’t exist.",
                        "cost": 1
                    }
                ],
                "primaryFactor": "Duration"
            },
            {
                "arcanum": "Spirit",
                "description": "     The shaman goes where she must to find wisdom and power. This spell allows the mage to bring a subject directly across the Gauntlet, either to or from the Shadow, without the need for a portal. If the subject is a spirit or ephemeral object, it appears in Twilight.",
                "suggestedRotes": "Athletics, Persuasion, Survival",
                "dots": 4,
                "withstand": "Gauntlet Strength",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may grant a conjured spirit or ephemeral object the Materialized Condition, which lasts until the spell’s Duration expires."
                    }
                ],
                "name": "World Walker",
                "primaryFactor": "Potency",
                "cost": "",
                "practice": "Patterning"
            },
            {
                "name": "Annihilate Spirit",
                "reach": [],
                "primaryFactor": "Potency",
                "dots": 5,
                "arcanum": "Spirit",
                "withstand": "Rank",
                "practice": "Unmaking",
                "description": "     The most fearsome spell in most shamans’ arsenal, this terrible magic utterly destroys a spirit. The target spirit may spend an Essence to roll Power + Finesse in a Clash of Wills, a lastditch attempt to reassert its existence through its Influences. If the spell is successfully cast, the spirit is instantly and utterly destroyed — even if it still has Essence, it does not retreat into hibernation, it is simply gone. Short of archmastery, this spell cannot affect spirits of Rank 6 or higher.",
                "suggestedRotes": "Intimidation, Science, Weaponry",
                "cost": ""
            },
            {
                "name": "Birth Spirit",
                "dots": 5,
                "practice": "Making",
                "suggestedRotes": "Crafts, Medicine, Expression",
                "arcanum": "Spirit",
                "withstand": "",
                "description": "     By means of this spell, the mage may coax dormant Essence into life, awakening it as a Rank 1 Spirit. This spirit is not under the mage’s particular control, but most newborn spirits feel a kind of respect or gratitude toward their maker. Many mages then use Bolster Spirit and Shape Spirit to improve their ephemeral creation’s capabilities.",
                "reach": [
                    {
                        "effect": "For one Mana, the Spirit created is Rank 2.",
                        "cost": 1
                    }
                ],
                "cost": "",
                "primaryFactor": "Duration"
            },
            {
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The Locus generates a number of Essence per day equal to the spell’s Potency."
                    }
                ],
                "primaryFactor": "Duration",
                "withstand": "Gauntlet Strength",
                "suggestedRotes": "Crafts, Empathy, Survival",
                "name": "Create Locus",
                "arcanum": "Spirit",
                "practice": "Making",
                "dots": 5,
                "cost": "",
                "description": "     By means of this spell, the mage creates a Locus at a location with the Resonant Condition. A Locus is a location in which the Shadow world is especially close. Spirits don’t need the Reaching Manifestation Effect to use their powers across the Gauntlet at a Locus, attempts to cross over are at +2 dice, and spirits whose natures match the Locus’ Resonant Condition heal at twice the normal rate."
            },
            {
                "cost": "",
                "dots": 5,
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may “flavor” the Essence with multiple Resonances she has previously encountered."
                    }
                ],
                "arcanum": "Spirit",
                "practice": "Making",
                "description": "     The shaman feeds her spiritual children. This spell generates a quantity of Essence equal to the spell’s Potency within the subject’s Pattern. The Essence has a Resonance of the mage’s choosing, as long as she’s encountered it before.",
                "withstand": "",
                "suggestedRotes": "Empathy, Expression, Occult",
                "primaryFactor": "Potency",
                "name": "Essence Fountain"
            },
            {
                "practice": "Making",
                "cost": "",
                "primaryFactor": "Duration",
                "arcanum": "Spirit",
                "suggestedRotes": "Crafts, Expression, Survival",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The mage may create an Iris between her Manse and the material world, allowing anyone to enter the Shadow directly into her Manse. She may craft a Key to this door if she wishes. The spell becomes Withstood by the Gauntlet Strength."
                    }
                ],
                "description": "     The master lives among her shadow brethren in a palace of her will. This spell carves out an extradimensional space in the Shadow, one of the fabled “Places That Aren’t” that doesn’t map to any location in the physical world. The Spirit Manse can take any form the mage desires, but its appearance is heavily colored by her Path and her Nimbus. As long as the spell’s Duration lasts, the mage gains the Safe Place Merit at a rating equal to the spell’s Potency.",
                "withstand": "",
                "name": "Spirit Manse",
                "dots": 5
            }],
            time: [{
                "name": "Divination",
                "reach": [
                    {
                        "effect": "The mage can ask more specific questions and receive mostly accurate answers. The answers need not come in the form of “Yes,” “No,” or “Irrelevant.” Instead the mage can ask questions like “Will Anna marry?” or “Will I ever bear a child?” and receive more information, such as “Anna will meet an old flame, Jason, and the two will reunite and one day marry.”",
                        "cost": 1
                    }
                ],
                "arcanum": "Time",
                "cost": "",
                "primaryFactor": "Potency",
                "practice": "Knowing",
                "suggestedRotes": "Academics, Empathy, Investigation",
                "withstand": "",
                "dots": 1,
                "description": "     The mage can look into her subject’s most likely future. Without Reach, the mage can only see generalities: “Will I meet Anna again soon?” is a valid question, while “What time will the police arrive?” is too specific to return an answer. This spell can see far into the future, such as telling the mage that a young cashier might eventually become a state Governor, or that a child prodigy might become a superstar, but looking too far from the present increases the likelihood of the answer being superseded by the point the future becomes the present. The Storyteller must decide what the future holds, taking into account the nature of the story as well as cues from the mage’s questions. The caster can ask one general question per level of Potency, receiving answers of “Yes,” “No,” or “Irrelevant.”"
            },
            {
                "cost": "",
                "arcanum": "Time",
                "name": "Green Light / Red Light",
                "withstand": "",
                "description": "     The mage may manipulate the subtle timings of events, smoothing or obstructing her subject’s progress. Cast positively, the subject finds elevators and taxis arrive just as he needs them, stop lights turn green, and he arrives on time for meetings. Cast negatively, anything that can delay the subject will delay him.",
                "primaryFactor": "Duration",
                "dots": 1,
                "reach": [],
                "practice": "Compelling",
                "suggestedRotes": "Computer, Larceny, Subterfuge"
            },
            {
                "reach": [
                    {
                        "cost": 1,
                        "effect": "When reacting to the information gained from this spell, the mage gains a bonus to Initiative equal to Potency."
                    }
                ],
                "arcanum": "Time",
                "primaryFactor": "Potency",
                "description": "     The mage can sense whether a subject will prove beneficial or baneful in the most likely future. The mage can see whether the stranger crossing the street to approach her at night is as threatening as he seems, or whether he has come to offer advice, for example. The spell itself does not tell the mage exactly what will happen, only whether it will prove good or bad for her. The stranger may augur as a bad omen for her; this could be due to his malicious intent — or maybe he’s running from some danger, or even carrying a cold.\n     Although often used to assess potential dangers, mages can cast this spell with themselves as the only subject, assessing whether their own actions will help or harm them.\n     Mages with Time -- may use the Temporal Sympathy Attainment to cast this spell on a subject in the past, but the spell still reveals positive or negative outcomes for the future. The spell is Withstood by temporal sympathy.",
                "dots": 1,
                "cost": "",
                "practice": "Knowing",
                "withstand": "",
                "suggestedRotes": "Investigation, Streetwise, Survival",
                "name": "Momentary Flux"
            },
            {
                "practice": "Unveiling",
                "reach": [],
                "description": "     The mage knows just the perfect time to act, whether it’s with a kind (or condemning) word, a punch, or even simply slipping out a door at the right time. This spell does not directly alter time or affect others, but rather grants the subject a perfect temporal assessment of the situation. Others might describe her as “in the zone,” mistaking her preternatural sense of timing for incredible focus.\n     The subject can spend a turn during the spell’s Duration planning an action. The subject loses any Defense and must remain still while planning. A turn spent planning grants a bonus to the next action equal to Potency. This bonus can only be applied to mundane instant actions; extended actions and spellcasting rolls do not benefit from it.",
                "cost": "",
                "withstand": "",
                "arcanum": "Time",
                "primaryFactor": "Duration",
                "name": "Perfect Timing",
                "dots": 1,
                "suggestedRotes": "Empathy, Socialize, Streetwise"
            },
            {
                "practice": "Unveiling",
                "cost": "",
                "suggestedRotes": "Academics, Empathy, Investigation",
                "name": "Postcognition",
                "reach": [
                    {
                        "effect": "The mage can “scrub” the vision like a video, speeding it up, slowing it down, rewinding it, pausing it, etc.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The mage remains aware of her surroundings, and does not lose Defense."
                    }
                ],
                "arcanum": "Time",
                "withstand": "",
                "primaryFactor": "Potency",
                "dots": 1,
                "description": "     The mage can see into the past of a subject, witnessing events as though she were physically present to view them. By default, the caster may only view Unchanged subjects, but with Time -- she may view the more distant past, in which case the spell is Withstood by temporal sympathy.\n     The mage views the subject in “real time” from a moment declared when casting until the Duration of Postcognition expires. While viewing the past, the mage loses all Defense and may not take any actions or cast further spells."
            },
            {
                "dots": 2,
                "cost": "",
                "arcanum": "Time",
                "practice": "Ruling",
                "suggestedRotes": "Occult, Science, Subterfuge",
                "reach": [
                    {
                        "cost": 2,
                        "effect": "The spell affects spellcasting rolls and supernatural powers."
                    }
                ],
                "withstand": "Resolve",
                "primaryFactor": "Potency",
                "description": "     Glimpsing the many potential futures of her subject, the mage selects the optimal course. The subject’s player rolls twice for her next mundane dice roll, and the mage’s player selects which dice roll takes effect.",
                "name": "Choose the Thread"
            },
            {
                "reach": [],
                "dots": 2,
                "description": "     Mages versed in Time know the tell-tale signs of disruption to the Patterns of time travelers, and not many Awakened are willing to trust that a traveler has honorable intentions. This spell preserves its subject against alterations to the timeline. Any alteration to history through the action of time travel provokes a Clash of Wills. If the mage wins, the subject is treated as though she were returning from a trip to the past herself when history settles, safeguarding her against being rewritten.",
                "withstand": "",
                "suggestedRotes": "Occult, Persuasion, Survival",
                "name": "Constant Presence",
                "practice": "Shielding",
                "arcanum": "Time",
                "cost": "",
                "primaryFactor": "Duration"
            },
            {
                "reach": [],
                "practice": "Ruling",
                "withstand": "",
                "arcanum": "Time",
                "name": "Hung Spell",
                "cost": "",
                "description": "     With this spell, the mage captures pure expressions of magic — spells — at the moment they enter the Fallen World, suspending them before they take effect but preserving their Duration from decay. The subject must be a mage, who must deliberately build his Imago to take advantage of this spell’s effect and pay one Mana when casting. Hung Spell may entrap up to its Potency in spells, which remain in their caster’s spell control but do not take effect until Hung Spell is canceled or runs out of Duration. When Hung Spell ceases, the trapped spells immediately take effect and begin their own Durations.\n     Many mages use the Fate 2 Attainment to set a Conditional Duration on Hung Spell, so that it releases the trapped spells in response to set conditions.",
                "dots": 2,
                "primaryFactor": "Duration",
                "suggestedRotes": "Crafts, Occult, Expression"
            },
            {
                "dots": 2,
                "suggestedRotes": "Academics, Stealth, Subterfuge",
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "Instead of simply preventing magic from uncovering the subject during the Duration of the shield, the mage may design a false series of events that inquisitive powers “uncover” instead of the truth. Attempts to magically discern the illusion provoke a Clash of Wills."
                    }
                ],
                "description": "     The mage shields a subject against temporal senses. While under the protection of this spell, any magic viewing the subject through time (whether looking at the shielded Duration from the future, or predicting the subject’s future while in the present) provokes a Clash of Wills.",
                "arcanum": "Time",
                "practice": "Veiling",
                "name": "Shield of Chronos",
                "cost": "",
                "withstand": ""
            },
            {
                "primaryFactor": "Potency",
                "withstand": "Resolve",
                "cost": "",
                "name": "Tipping the Hourglass",
                "practice": "Ruling",
                "suggestedRotes": "Athletics, Crafts, Investigation",
                "reach": [],
                "arcanum": "Time",
                "dots": 2,
                "description": "     The mage can momentarily alter the flow of Time, causing it to speed up or slow down for a subject, but not drastically. While the spell might allow the subject extra time to dodge an oncoming car or slow an enemy’s movements as though he were drunk, it won’t let her go back in time to avoid the car or the angry assailant entirely. The caster may add or subtract Potency from the subject’s Initiative. Subjects who have already acted in a turn before having this spell cast upon them do not act again on their new Initiative rating."
            },
            {
                "dots": 2,
                "withstand": "",
                "suggestedRotes": "Medicine, Investigation, Subterfuge",
                "primaryFactor": "Duration",
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The subject may ignore Persistent Conditions during the spell’s Duration. Time spent under this spell’s effects does not count toward any time necessary for Conditions to lapse."
                    },
                    {
                        "effect": "The subject may heal naturally while under the spell’s effect.",
                        "cost": 1
                    },
                    {
                        "cost": 1,
                        "effect": "The subject may regain Willpower while under the spell’s effect."
                    },
                    {
                        "effect": "The subject may regain Mana while under the spell’s effect.",
                        "cost": 1
                    }
                ],
                "cost": "",
                "practice": "Shielding",
                "description": "     The mage can ward off the deleterious effects of advancing time on her subject. This spell cannot undo effects, but can create enough of a buffer between the subject and Time’s endless march to buy what a mage needs most — time to think. While this spell is active, the subject becomes immune to things that worsen with time. She will not bleed out from her wounds, and poison and toxins effectively halt their duration, as does the progression of disease. New Conditions and Tilts cannot be imposed on the subject while the spell remains in effect. Supernatural powers that impose effects provoke a Clash of Wills.\n     The downside of the spell’s protection is that the subject no longer heals naturally during the spell’s Duration. More dramatic effects such as Pattern Restoration or Life magic can still heal her. More importantly, the subject cannot regain Willpower or Mana, or spend Experiences while under the spell’s effect. The subject ceases aging during the use of this spell.",
                "arcanum": "Time",
                "name": "Veil of Moments"
            },
            {
                "dots": 3,
                "description": "     The mage can greatly accelerate her subject’s temporal motion. From the perspective of onlookers she becomes a blur as if moving in fast motion, acting with impossible speed. At high enough levels, mundane creatures simply cannot perceive her at all, save perhaps for hair raising on the neck or a gut feeling that something is not quite right.\n     Multiply the subject’s Speed by Potency. While under the spell’s effect, the subject always goes first in a turn unless he chooses to delay his action, in which case he may interrupt any other character’s turn with his own as a reflexive action, then return to the front of the Initiative queue the next turn. Other characters using pre-empting powers provoke a Clash of Wills. Acting in such accelerated time makes the subject very hard to hit, but only as long as he is able to concentrate; his Defense does not change, but add Potency to Defense before doubling it for Dodge actions (p. 217). He may employ Defense (and Dodges) against firearms.",
                "withstand": "",
                "reach": [
                    {
                        "effect": "Divide the time per roll of extended actions taken by the subject by Potency. The spell has no effect on the ritual casting interval of mages.",
                        "cost": 1
                    },
                    {
                        "effect": "For a point of Mana, Dodge actions taken while under this spell’s effect have the rote quality.",
                        "cost": 1
                    }
                ],
                "arcanum": "Time",
                "practice": "Perfecting",
                "primaryFactor": "Potency",
                "name": "Acceleration",
                "suggestedRotes": "Athletics, Drive, Stealth",
                "cost": "1 Mana"
            },
            {
                "reach": [
                    {
                        "cost": 1,
                        "effect": "For a point of Mana, the subject loses Defense against attacks."
                    },
                    {
                        "effect": "Multiply the time per roll of extended actions taken by the subject by Potency. The spell has no effect on the ritual casting interval of mages.",
                        "cost": 1
                    }
                ],
                "name": "Chronos’ Curse",
                "cost": "1Mana",
                "withstand": "Stamina",
                "arcanum": "Time",
                "dots": 3,
                "practice": "Fraying",
                "primaryFactor": "Potency",
                "description": "     The mage slows his subject’s experience of time to a crawl. To the subject, everything seems to move at dazzling speeds, while she feels like she’s caught in a dream, unable to run or punch or move properly. She can’t even speak normally to others while affected — while from her perspective her words are clear enough, to everyone else they’re a long, impossibly drawn-out sound.\n     Divide the subject’s Speed by Potency, rounding down. If Speed reaches 0, the subject is effectively moving so slowly she appears rooted to the spot. While under the spell’s effect, the subject always goes last in a turn. The subject’s Defense is also reduced by Potency.",
                "suggestedRotes": "Academics, Occult, Intimidation"
            },
            {
                "practice": "Fraying",
                "cost": "",
                "withstand": "",
                "description": "     The mage may step back through time a short distance, undoing a few precious seconds. This spell sends the subject back through time a number of turns equal to Potency. The subject retains any injuries and Conditions gained in the undone turns, and spent Mana and Willpower do not return. Spells cast on her person in the undone time remain as long as she cast them. All other spells she may have cast or had cast on her in the intervening time are canceled. Until the subject catches up to the present, the distortion caused by this spell is visible under Active Time Mage Sight. Once she does so, any changes she made to history become Lasting.",
                "dots": 3,
                "arcanum": "Time",
                "suggestedRotes": "Academics, Occult, Survival",
                "primaryFactor": "Potency",
                "reach": [
                    {
                        "effect": "The subject travels back a full scene. This Reach effect may be applied multiple times.",
                        "cost": 1
                    }
                ],
                "name": "Shifting Sands"
            },
            {
                "practice": "Weaving",
                "withstand": "",
                "description": "     We are all the sum of our previous selves, and with this spell a mage can call those afterimages forth. Cast upon an object, area, or living being, this spell replaces its subject with an earlier version of itself, chosen by the caster. Without the Temporal Sympathy Attainment, only Unchanged pasts may be brought to the present, but this is still sufficient to remove most Conditions and heal injuries. By employing Temporal Sympathy, the mage can restore ancient ruins to their inhabited state, recapture her youth, or return her enemies to childhood. When the spell’s Duration ends, the subject immediately returns to its present self. Injuries, Conditions, and other effects imposed on the subject while Temporal Summoning is in effect transfer to the present version of the subject when it returns. The spell does have limits, however; it cannot bring the dead back to life or undo transformation into supernatural beings, though it still changes the subject physically - a vampire returned to “childhood” becomes a vampiric child, and a corpse stripped of decades becomes a younger-looking corpse with no cause of death.",
                "suggestedRotes": "Athletics, Investigation, Persuasion",
                "arcanum": "Time",
                "dots": 3,
                "primaryFactor": "Potency",
                "name": "Temporal Summoning",
                "cost": "",
                "reach": []
            },
            {
                "dots": 3,
                "description": "     Structures decay, bodies age. Toxins build up in muscles, and materials become brittle. The mage can inflict these processes by Perfecting the passage of time on her subject. This is an attack spell, inflicting its Potency in damage to objects and structures. This damage directly affects the object’s Structure, and reduces its Durability by 1 for every 2 points of Structure lost. When used against living things, the spell deals bashing damage equal to Potency. At the Storyteller’s discretion, immortal creatures like vampires might be immune to the damaging properties of this spell.",
                "withstand": "",
                "primaryFactor": "Potency",
                "practice": "Perfecting",
                "name": "Weight of Years",
                "cost": "",
                "reach": [
                    {
                        "effect": "The spell reduces living subjects’ Athletics by Potency through sheer exhaustion.",
                        "cost": 1
                    }
                ],
                "arcanum": "Time",
                "suggestedRotes": "Crafts, Intimidation, Medicine"
            },
            {
                "cost": "1 Mana",
                "suggestedRotes": "Empathy, Investigation, Streetwise",
                "description": "     Weaving between the many immediate potential futures, the mage can read the immediate futures of her subjects and react accordingly to thwart (or aid) their plans. In combat, while this spell is in effect, the player can require that every character affected by the spell declare his or her action at the start of every turn. The player need not declare her own action, but instead can choose to act freely at any point within the Initiative order. This trumps all other supernatural Initiative effects save for those created by the Time Arcanum, which requires a Clash of Wills.\n     In Social situations, the mage adds Doors equal to Potency when the target of Social maneuvering by her subject, or removes them from a subject she is maneuvering against.",
                "name": "Present as Past",
                "reach": [],
                "primaryFactor": "Potency",
                "dots": 4,
                "arcanum": "Time",
                "withstand": "",
                "practice": "Patterning"
            },
            {
                "practice": "Patterning",
                "withstand": "",
                "arcanum": "Time",
                "dots": 4,
                "reach": [
                    {
                        "effect": "By building the hypothetical future around a Social interaction, the mage may reduce the subject’s Doors by Potency, since she has intimate knowledge how each question or interaction might affect the target’s choices.",
                        "cost": 1
                    }
                ],
                "name": "Prophecy",
                "description": "     The mage causes the future to conform to her expectations, building a hypothetical scenario she can then examine for knowledge about how to alter the future drastically, whether to ensure or avert a specific event. This works like “Divination,” p. 186, but the mage can ask specific questions and also gains answers about things that might come to pass, depending on variables like choice or outside chance. For example, she could ask whether calling her ex will lead to reconciliation if she makes the attempt, or whether killing a man might set his son down a road to revenge. She can ask one such question per level of Potency and receive a detailed answer that accounts for hypothetical events. Other mages using Divination on the same subject while Prophecy is in effect see the most likely outcome of the scenario set by this spell.",
                "primaryFactor": "Potency",
                "cost": "",
                "suggestedRotes": "Academics, Expression, Investigation"
            },
            {
                "practice": "Unraveling",
                "withstand": "",
                "cost": "",
                "name": "Rend Lifespan",
                "arcanum": "Time",
                "suggestedRotes": "Athletics, Medicine, Intimidation",
                "reach": [
                    {
                        "effect": "For a point of Mana, the spell now inflicts aggravated damage.",
                        "cost": 1
                    }
                ],
                "dots": 4,
                "primaryFactor": "Potency",
                "description": "     The mage can cause parts of a target’s body to age rapidly and others to regress in development. The effects are temporary but devastating, inflicting lethal damage equal to the spell’s Potency. Targets killed by this spell often appear to have “died of old age,” despite their apparent age. At the Storyteller’s discretion, undead beings like vampires and ghosts may be immune to this spell."
            },
            {
                "reach": [
                    {
                        "cost": 1,
                        "effect": "The spell may reassign up to Potency Skill or Merit dots, as the subject’s training and background shift. Skills may not exceed the subject’s maximum."
                    },
                    {
                        "effect": "The spell may reassign Attribute dots up to Potency, but may not move any category of Attributes below the character creation amount for its priority, or take any Attribute over the maximum for the subject.",
                        "cost": 1
                    },
                    {
                        "effect": "This spell can affect supernatural creatures. While this cannot remove the supernatural Advantages of creatures born to their condition (like werewolves, spirits, or demons), creatures transformed at some point during their lives, like vampires or changelings, can briefly experience life as though they hadn’t been changed.",
                        "cost": 2
                    }
                ],
                "dots": 4,
                "withstand": "Resolve",
                "description": "     Reaching back through time, the mage warps her subject’s timeline, making her present self as though her life took a very different course. This spell allows the mage to rewrite a subject’s history, choosing a point of divergence on his timeline and specifying changes from there. Without Temporal Sympathy, only recent decisions and changes can be rewritten, but as long as the subject is Unchanged at the point of divergence, the mage may make alterations as she wishes. With Temporal Sympathy, the spell is capable of changing every detail of a subject’s history, though the false timeline created must still be possible.\n     Once the Duration expires, the subject instantly reverts to its original history. Memories of the time spent “rewritten” will 191 time seem distant and hazy, dreamlike, but the subject will remember the altered perspective at least to some degree unless Mind magic further alters her memories. This spell does not normally affect supernatural creatures.",
                "suggestedRotes": "Expression, Investigation, Persuasion",
                "arcanum": "Time",
                "primaryFactor": "Potency",
                "practice": "Patterning",
                "name": "Rewrite History",
                "cost": ""
            },
            {
                "practice": "Patterning",
                "dots": 4,
                "description": "     By redefining how a subject’s Time Pattern interacts with the present, the mage throws that subject forward through time, awaiting the moment the present catches up to him. The subject completely vanishes from the Fallen World, and reappears unchanged when the spell’s Duration ends. The subject experiences a momentary lurch in his perceptions, and then suddenly finds his surroundings changed by intervening events. The subject remains in the same location and retains momentum if he had been moving. If something now occupies the space the subject reappears in, apply the Knocked Down Tilt to whichever has the least Size.\n     Add Space 2: By using the Sympathetic Range Attainment tied to a destination, the spell brings the subject back at that destination rather than at the point he left.",
                "arcanum": "Time",
                "withstand": "Stamina",
                "cost": "",
                "name": "Temporal Stutter",
                "primaryFactor": "Potency",
                "reach": [],
                "suggestedRotes": "Intimidation, Science, Survival"
            },
            {
                "primaryFactor": "Potency",
                "withstand": "",
                "cost": "",
                "practice": "Unmaking",
                "arcanum": "Time",
                "name": "Blink of an Eye",
                "dots": 5,
                "reach": [
                    {
                        "effect": "For a point of Mana, the spell may affect spellcasting, increasing the effective Gnosis of a mage subject by Potency for purposes of ritual casting interval only. For every effective Gnosis over 10, reduce the ritual interval by one turn.",
                        "cost": 2
                    }
                ],
                "description": "     By collapsing time around a subject, the mage allows her to accomplish in seconds what would take hours. This spell turns the next extended action taken by the subject into an instant action, absorbing rolls equal to Potency into a single turn. It does not affect ritual casting intervals for mages.",
                "suggestedRotes": "Academics, Crafts, Occult"
            },
            {
                "practice": "Unmaking",
                "description": "     Where less-advanced Time mages can only undo actions leading directly up to the present, a Master may choose any moment in her subject’s timeline and destroy everything after it, sending the subject’s present self back in time to the moment of the mage’s choosing. The subject arrives in the past at the specified time, inhabiting his own past body and is free to act, changing history by his actions, although the distortions to his timeline are visible under Active Time Mage Sight. He remains in the past for a time equal to Corridors of Time’s Duration factor, or until he “catches up” to the present. Once in the present, the new timeline sets and any changes the subject made to history become Lasting.\n     Without temporal sympathy, the subject may only be sent back to a period with an Unchanged temporal sympathy to the present. By using temporal sympathy, the mage may allow her subject to revisit old decisions and make different choices. The subject arrives in whatever location he was in at the time chosen. By including the Sympathetic Range Attainment, the mage may send him somewhere else, but subjects cannot be sent back to periods outside their own lifetime. Such unfettered time travel is the stuff of legend, temporal Irises, and whispers about the powers of archmages.",
                "suggestedRotes": "Academics, Investigation, Persuasion",
                "reach": [],
                "arcanum": "Time",
                "withstand": "",
                "cost": "",
                "dots": 5,
                "primaryFactor": "Potency",
                "name": "Corridors of Time"
            },
            {
                "dots": 5,
                "primaryFactor": "Duration",
                "cost": "",
                "name": "Temporal Pocket",
                "practice": "Making",
                "reach": [],
                "withstand": "",
                "arcanum": "Time",
                "description": "     The mage grants her subject a gift of hours, Making extra time on her timeline. To the subject, the entire world appears to pause, frozen in time. After the subjective Duration factor of the spell, the subject rejoins the Fallen World’s timeline and, to him, the universe immediately starts moving again.\n     While under the effects of a Temporal Pocket, the subject ages normally, any Conditions that change with time continue, wounds continue bleeding out, he must sleep the usual amount, and so on. He may move freely, examine objects, take any Mental actions, heal, touch things, and even cast spells with himself as the subject, but not physically move, consume, or injure anything — any attempt to do so immediately ends the spell, but returns the subject to the timeline having just completed the action he attempted.",
                "suggestedRotes": "Occult, Science, Stealth"
            }]
        };

        return s;
    }


    get allMerits() {
        let m =
            [{ name: 'Adamant Hand', type: 'supernal', variableCost: false, minCost: null, maxCost: 2, prerequisite: 'Adamantine Arrow Status •, (Athletics, Brawl, or Weaponry •••, Special)', effect: '     Your character has studied extensively in the Adamantine Arrow martial arts. This allows her to use combat techniques as Yantras for instant spells. When taking this Merit, choose Athletics, Weaponry, or Brawl, which your character must have three or more dots in. This Merit allows use of that Skill in combat as a reflexive Order tool Yantra, adding dice to a spell cast on subsequent turns, or to a spell cast reflexively in the same turn as the combat action. You may purchase this Merit multiple times to reflect the other styles.' },
            { name: 'Artifact', type: 'supernal', variableCost: false, minCost: null, maxCost: 3, prerequisite: '', effect: '     World which is both a physical symbol of magic and a unique item independently empowered to create sorcerous ef￾fects. These items possess their own Mana stores, and have their own effective Gnosis and Arcana with which to generate effects. They can cast these effects when harnessed by an Awakened 100 chapter Three: supernal loreowner who has researched (or divined through Prime) the manner in which the item works. In general, this takes successes on an extended research action equal to twice the Artifact’s Merit dots.\n     To calculate the cost of an Artifact, look to its single greatest effect, and map it to a spell effect. The base cost is equal to the highest Arcanum used, or three, whichever is higher. Each additional effect adds to the cost, but only half the highest Arcanum used (rounded up). Including a Utility Attainment in a spell effect (for example, an Artifact that can cast at Sympathetic Range) increases the cost by one dot for each Attainment included. The Merit is not limited to five dots.\n     he item can store Mana equal to twice the dot rating. The item’s effective Gnosis is equal to half the dot rating, rounded up. An owner can access and refill the item’s Mana as if it were her own, or can use it to fuel the Artifact’s abilities. The Artifact can also use its Mana as part of its own activation. The Artifact has effective Arcana equal to the highest Arcanum used in its various effects. Artifacts cannot Reach beyond the “free” Reach for their Arcana ratings on their own. If an Artifact risks Paradox, the user can spend Mana to mitigate Paradox (in any combination of her own or the Artifact’s Mana pool, up to her Gnosis-derived limits) and may choose to contain the Paradox herself. Otherwise, the Artifact automatically releases it.\n     Every Artifact will use its effects under different circumstances, determined when you create the Artifact. For example, an Artifact might cast its effect the moment it is first seen by human eyes, or whenever it’s dropped on the ground.\n     If an owner accesses the Artifact’s effects, she may use her own Gnosis and Arcana, the Artifact’s, or any combination thereof. Every Artifact is also a Path tool Yantra worth +1 dice for mages of the Path of the Artifacts’ highest Arcanum.' },
            { name: 'Astral Adept', type: 'supernal', variableCost: false, minCost: null, maxCost: 3, prerequisite: 'Awakened or Sleepwalker', effect: '     Your character is deeply in tune with her own soul, and may enter the Astral Realms without a place of power. In addition to the access methods listed on p. 249, your character may perform a ceremony to attune herself to the astral, then spend a Willpower point to allow her to meditate into the realms. Decide what form your ceremony takes when buying this Merit; many mages use a Legacy Oblation, while Sleepwalkers might require special drugs, exercises, or chants.' },
            { name: 'Between the Tick', type: 'supernal', variableCost: false, minCost: null, maxCost: 2, prerequisite: 'Wits •••, Time •', effect: '     Your character has perceived the depths of Time, and thus can act with the utmost precision, performing an action perfectly for ideal timing, or ideal efficiency. With this Merit, once per scene you can subtract –1 from your character’s Initiative for the turn to add a die to her action for the turn, or subtract a die from her action to add +1 to her Initiative.' },
            { name: 'Cabal Theme', type: 'supernal', variableCost: false, minCost: null, maxCost: 1, prerequisite: 'In a Cabal, all members must have this Merit', effect: '     Your character is part of a deeply themed cabal. All members of the cabal are counted as having one dot higher in the Shadow Name Merit for purposes of persona Yantras, even if they do not possess the Merit at all, or if it would take Shadow Name above three dots.' },
            { name: 'Consilium/Order Status', type: 'supernal', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     This Merit grants all the advantages of the Status Merit (see p. 107), except it applies to the city’s Consilium or your character’s local Order Caucus. This affords certain protections and advantages under the Lex Magica.\n     Your character’s position affords her certain access to her Caucus or Consilium’s stores. She can access Artifacts, Imbued Items, mentors, libraries, Grimoires, and other magical resources. The Storyteller should assign an Availability rating to the item your character seeks, related to the power level or regular Merit rating. Consider your character’s Status dots as Resources for the purpose of procuring these magical resources (see Acquiring Services, p. 228). Availability ratings assume the service or Merit will be assigned on a temporary basis (for a single story); add •• for permanent requisitions. The group assumes she’ll return it when done with it, or make amends if it’s destroyed or lost. Merits suitable for requisition include Alternate Identity, Retainer, Imbued Item, Artifact, Grimoire, Mentor, Hallow, Sanctum, Library, Advanced Library, Safe Place, Familiar, and Resources, all with Availability equal to their dot rating. The Storyteller decides if your character’s group has access to a particular magical resource; rank doesn’t summon magical storehouses into being.\n     Order Status unlocks certain Merits and advantages unique to that group. As well, certain spells are taught to Order members; learning them outside the Order can be difficult at best, dangerous at worst. Usually, Order Status comes with a position of responsibility. This varies from city to city by Order.Finally, Seers of the Throne Status adds to the character’s Resources for acquiring mundane items and services.Sleepwalkers may only buy the first dot of a single version of this Merit. A character may normally have Status in a single Order. If a character works closely with a second Order, however, she may buy the first dot of their Status but no more, and may not use them for requisitions.\n     The Orders are both global organizations and locally compartmentalized. If a character uses Order Status in a Caucus other than her home one, reduce her effective rating in this Merit by –1 if the Caucus is a member of the same Consilium or Assembly, –2 if it is a member of the same Convocation, and –3 if it is unrelated.' },
            { name: 'Destiny', type: 'supernal', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     Your character’s thread stands out in the skein of Fate. Like the hero of an epic she is destined for great triumphs, but she also has a Doom that hangs over her head and threatens to turn her tale into a tragedy.\n     Each chapter, you have a pool of Destiny equal to your dots in this Merit. Each time you use a point of Destiny you may either gain the rote quality on a single mundane roll chosen before you roll the dice or reroll a single mundane action after you see the result of the roll (although you must take the second 101 meritsresult). You may spend a point of Willpower when invoking your Destiny to affect a spellcasting roll.\n     Drawback: Your character has a Doom. This is the means by which destiny brings her life as she knows it to a tragic end — such as addicted, betrayed, crippled, devoured, enslaved, imprisoned, maddened, murdered, ostracized, possessed, ruined, or turned. This either kills her, or leaves her alive and suffering. Whenever you spend Willpower to avoid the Doom, you add two dice instead of three (or +1 to a static value). However, whenever you spend Willpower on an action that will further the Doom but the roll fails, you immediately regain the spent Willpower. The Storyteller is the arbiter of which actions delay or hasten your character’s Doom.' },
            { name: 'Dream', type: 'supernal', variableCost: true, minCost: 1, maxCost: 5, prerequisite: 'Composure •••, Wits •••', effect: '     Once per chapter, your character can dig within her dreams for prophetic answers to primordial truths. She may enter her own dreams without a meditation roll when she sleeps, and if she has a basic understanding of something she wishes to divine from her dreams, you may use this Merit. Your character must sleep or meditate for at least four hours. Then, ask the Storyteller a yes or no question about the topic at hand. He must answer accurately, but can use “maybe” if the answer is truly neither yes nor no. Depending on the answer, you may ask additional questions, until you have asked questions equal to your Dream Merit dots..' },
            { name: 'Egregore', type: 'supernal', variableCost: true, minCost: 1, maxCost: 5, prerequisite: ' Mysterium Status •', effect: '     This Merit reflects a deeper inclusion into Mysterium secrets than the Mysterium Status Merit normally grants. Mystery Initiation opens the doors to the communal experience of living magic the Mysterium calls the egregore. Access to the egregore opens certain techniques for use within Mysterium rituals.Each level of this Merit allows an additional ability.\n     Mysteriorum Arche (•): In a teamwork spellcasting roll (see p. 119) in which the character is participating, she does not suffer the –3 penalty to contribute without the necessary Arcanum rating, and adds an automatic success if a full participant. All members of the ritual team must possess this Merit.\n     Mysteriorum Anima (••): At this level, your character’s full Mysterium Status applies to all Mysterium Caucuses, not just her local one.\n     Mysteriorum Barathrum (•••): Your character is initiated sufficiently as to be part of the knowledge base. She does not require physical access to any Library held by her cabal or Mysterium Caucus, and once per chapter may gain the Informed Condition regarding the local Mysterium’s membership, specialties, Merits, Obsessions, and Arcana.\n     Mysteriorum Calamitas (••••): Your character has been granted secrets of techniques which decouple physical objects from magic. The first magical tool your character uses in a spell counts as a Dedicated Magical Tool. \n     Mysteriorum Focus (•••••): Your character connects with the Order’s fundamental ethos, on a level beyond most any other members. When she’s in an Order Sanctum, she’s considered to have a Medium sympathetic connection to all members of the Order.' },
            { name: 'Enhanced Item', type: 'supernal', variableCost: false, minCost: null, maxCost: 1, prerequisite: '', effect: '     Your character owns an item enhanced by indefinite Duration spells, which permanently modify the item’s properties.\n     Each dot purchased reflects one dot worth of spells the item contains. This Merit is not limited to the normal five dots. However, any purchased dots beyond the fifth count as a half-dot of spells. So, an Enhanced Item with nine dots actually contains up to seven dots’ worth of spells. If a spell uses multiple Arcana, use the highest to determine the cost for this Merit.\n     Additionally, dots can be spent to directly enhance the item. A dot can provide +1 to the item’s bonus as a tool, a point of Structure, or a point of Durability. This Merit can be combined with the Imbued Item Merit, but it cannot be combined with the Artifact Merit.' },
            { name: 'Familiar', type: 'supernal', variableCost: false, minCost: null, maxCost: 2, prerequisite: '', effect: '     Your character has been bonded to a Familiar, an ephemeral entity (a ghost, spirit, or Goetia) that has agreed to partner her in exchange for safety from bleeding Essence. Design your familiar with the rules for ephemeral entities in Chapter Six; it may be wholly in Twilight or Fettered to an item or animal. Two dots in this Merit indicate a Rank 1 entity. Four dots indicate a Rank 2 entity.' },
            { name: 'Familiar', type: 'supernal', variableCost: false, minCost: null, maxCost: 4, prerequisite: '', effect: '     Your character has been bonded to a Familiar, an ephemeral entity (a ghost, spirit, or Goetia) that has agreed to partner her in exchange for safety from bleeding Essence. Design your familiar with the rules for ephemeral entities in Chapter Six; it may be wholly in Twilight or Fettered to an item or animal. Two dots in this Merit indicate a Rank 1 entity. Four dots indicate a Rank 2 entity.' },
            { name: 'Fast Spells', type: 'supernal', variableCost: false, minCost: null, maxCost: 2, prerequisite: ' Firearms ••, Time •', effect: '     Your character’s Aimed spells streak out with the speed of bullets. Subjects may not apply their Defense against your Aimed Spell rolls unless they use a Supernatural power that allows them to use Defense against firearms.' },
            { name: 'Grimoire', type: 'supernal', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     Your character has discovered a Grimoire. If she is capable of casting the spells described, she may use the Grimoire to learn those rotes with Experiences, or cast following the Grimoire’s instructions to gain the rote quality (see p. 214).\n     Each dot in this Merit allows for the Grimoire to contain two rotes of any Arcanum rating.' },
            { name: 'Hallow', type: 'supernal', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     Your character has secured a Hallow, a nexus of magical energies that seeps Mana into the world. A Hallow produces one Mana per dot in the Merit per day. When choosing this Merit, determine how the Hallow leaks Mana into the world. Mana that is not harvested congeals quickly into tass. Left to its devices, the Hallow can store three times its dot rating in tass before it becomes “dormant” and stops producing Mana until all of the tass is harvested. As with Sanctum and Safe Place, a Hallow can be shared between a cabal.' },
            { name: 'High Speech', type: 'supernal', variableCost: false, minCost: null, maxCost: 1, prerequisite: '', effect: '     The character can use High Speech as a Yantra in spellcasting (see p. 120).' },
            { name: 'Imbued Item', type: 'supernal', variableCost: false, minCost: null, maxCost: 1, prerequisite: '', effect: '     An Imbued Item is an item storing a spell that does not have an indefinite duration, and Mana with which to cast that spell. When creating an Imbued Item for your game, choose a spell. The item contains that spell, and a user (even a Sleeper) may trigger the spell if she knows the method of triggering. The method is usually a simple word or gesture, but the creator can make it as complex as he wishes. The spell always requires at least one point of Mana; if the spell would require Mana, use that amount. If it would normally not require Mana, it requires one point. When a user triggers the spell, the player rolls to cast it with a dice pool of the spell’s Arcanum rating plus the user’s Gnosis (if Awakened).\n     Each dot purchased reflects one dot worth of the spell the item contains. If a spell uses multiple Arcana, use the highest to determine the cost for this Merit. Including a Utility Attainment in a spell effect (for example, an Imbued Item that can cast at Sympathetic Range) increases the cost by one dot for each Attainment included. Only Attainments that affect the imbued spell can be imbued.\n     By default, an Imbued Item has a single point of Mana. Points in this Merit (in excess of those required by the imbued spell) purchase a “battery” of two additional Mana each. This Mana can only be used to cast the spell within the item. Recharging the Mana reserves requires Mana and one hour per point. While an Imbued Item may only possess one triggered spell, the Merit is not limited to the normal five dots, because of this battery effect.\n     Imbued Items can be used to cast spells that risk Paradox, with the base Paradox dice per Reach of their user’s Gnosis (1 for unAwakened users.) Awakened users can spend the item’s Mana instead of their own to mitigate Paradox, but only up to the limit imposed by their Gnosis. Paradoxes from an Imbued Item cannot be contained, instead automatically releasing.This Merit can be combined with the Enhanced Item Merit, but it cannot be combined with the Artifact Merit.' },
            { name: 'Infamous Mentor', type: 'supernal', variableCost: true, minCost: 1, maxCost: 5, prerequisite: 'Mentor (equal or higher level)', effect: '     Your character’s Mentor is of particularly strong repute. This may be negative or positive. When taking this Merit, determine the Mentor’s Order and Consilium Status. They should be close to the Mentor dot rating. As well, choose Social Merits equal to twice the Infamous Mentor dots. Your character can access these Merits and Status, so long as she’s willing to name-drop her Mentor and live with the consequences.\n     Most characters will grudgingly acquiesce to a Mentor’s Status, but will later look down upon the student for leaning on the Mentor’s reputation.' },
            { name: 'Lex Magica', type: 'supernal', variableCost: false, minCost: null, maxCost: 2, prerequisite: 'Silver Ladder Status •1', effect: '     The laws of the Pentacle are symbolic concepts designed by people who make symbols real. A théarch acting in an official, titled capacity (such as Herald, Sentinel, Factotum, Deacon, Hierarch, or Magister) gains certain advantages with this Merit:\n     First, add her Silver Ladder Status or Consilium Status (whichever she’s acting with) to her Doors when a character attempts to outmaneuver her socially (see p. 215). Second, characters cannot use Willpower to increase dice pools on Social actions or magic which would influence her behavior.\n     Lastly, your character may use her Silver Ladder Status or Consilium Status (whichever is higher) as a Yantra in spells directly enforcing the Lex Magica’s laws. This includes spells to investigate potential crimes, to pursue offenders, to use the law to defend innocence, and any other spell to help the rule of law work more thoroughly. The dice bonus for the Yantra is half the Merit dots used, rounded up.' },
            { name: 'Mana Sensitivity', type: 'supernal', variableCost: false, minCost: null, maxCost: 1, prerequisite: '', effect: '     Your character’s awakened eye has sensed Mana enough that her mundane senses have begun picking up the cues of its presence.\n     Hallows and stored Mana trigger her Peripheral Mage Sight, even without an active magical effect.' },
            { name: 'Masque', type: 'supernal', variableCost: true, minCost: 1, maxCost: 5, prerequisite: 'Guardians of the Veil Status •', effect: '     The Guardians must adopt Masques, personas, in order to detach from the grim necessities of their work and stay in cover. Their ancient practices allow these Masques to become different people almost entirely; they have different abilities and even ethical codes to suit the role. At each level of Masque, the persona gains different abilities that are only available to the character upon donning the Masque. Adopting a Masque requires spending a point of Willpower, which cannot be replenished so long as the character maintains the identity. Shedding a Masque requires a full minute to get “out of character.”\n     To take additional Masques, purchase them as single, two-dot Merits. This gives the additional Masques at the same level as the primary Masque.\n     Identity (•): Choose a Virtue and Vice different than that of your character. While in the Masque, your character benefits from those traits instead of her own.\n     Competency (••): Choose Skill Specialties equal to the Masque Merit dots. Your character uses those Specialties instead of her own while in the Masque.\n     Diffusion (•••): Choose a new Signature Nimbus (see p. 89). While in the Masque, your character uses that Nimbus instead of her own.\n     The Code (••••): Choose two Acts of Hubris your character would normally suffer. While in the Masque, your character does not risk Wisdom for those acts.\n     Immersion (•••••): Choose up to five Merit dots. When your character dons her Masque, she gains access to these Merits. These Merits must be logical parts of the identity, at Storyteller discretion, and cannot include further Masques.' },
            { name: 'Mystery Cult Influence', type: 'supernal', variableCost: true, minCost: 3, maxCost: 5, prerequisite: '', effect: '     Your character has influence over a Mystery Cult (see p. 106) without actually being a subordinate member. Perhaps your character is a “power behind the throne” or even worshiped as a deity. Your character benefits from the same level of Mystery Cult Initiation, without having to be tied to the cult. This means fewer responsibilities to the cult, plausible deniability if they’re revealed, and the ability to step away at any time.' },
            { name: 'Occultation', type: 'supernal', variableCost: true, minCost: 1, maxCost: 3, prerequisite: '', effect: '     Your character is unnoticeable and inoffensive on a mystical level. Any time a character tries to read your character’s aura, or otherwise use magic to discern bits of truth within her, subtract your Merit dots from their pool.\n     Normally, a mage’s spells carry with them a hint of his Nimbus. This Merit allows a mage to hide that, to metaphysically sweep that under a rug. Your character’s Signature Nimbus is faint, vague, and couched in more symbolism and oblique references than other mages’. When someone attempts to scrutinize her Nimbus to identify her or track her, subtract your Merit dots from their rolls. The Withstanding level of sympathy for spells targeting the character has a minimum of her Occultation dots.\n     Drawback: If your character ever gains the Fame Merit, or becomes noticed by the public at large, you can lose this Merit.' },
            { name: 'Potent Nimbus', type: 'supernal', variableCost: true, minCost: 1, maxCost: 2, prerequisite: '', effect: '     Your character’s Nimbus has distinct and powerful effects on witnesses. At one dot, add two to your character’s effective Gnosis when determining her Nimbus Tilt (see p. 90). At two dots, add four to her effective Gnosis for that purpose. Additionally, add your dots in this Merit to any rolls to flare your character’s Nimbus.' },
            { name: 'Potent Resonance', type: 'supernal', variableCost: false, minCost: null, maxCost: 2, prerequisite: 'Gnosis 3+', effect: '     Your character’s Signature Nimbus is particularly overbearing. Whenever a character scrutinizes her Signature Nimbus with Mage Sight, he’s subject to the effects of her Immediate Nimbus and its corresponding Tilt.' },
            { name: 'Prelacy', type: 'supernal', variableCost: true, minCost: 1, maxCost: 4, prerequisite: 'Seers of the Throne Status •••', effect: '     A successful Seer who has served her patron Exarch well can cast spells in his name. She hears the Tyrants’ voices in her sleep. She understands their demands directly. A black iron portal forms deep within her Oneiros, and her daimon, the Goetia representing her drive to further herself, becomes twisted by the Exarch’s agenda.She gains the following effects, at each rank of this Merit:\n     Chosen Vessel (•): your character gains the Persistent Mystery Commands Condition.\n     Sword (••): The character may use the patron Exarch’s symbolism as a patron Yantra in spellcasting, worth half her Prelacy dots in dice (round up).\n     Crown (•••): The character gains an Attainment based on her Exarch’s symbolism.\n     Temple (••••): If one of your character’s soul stones is incorporated into a Demesne, the Demesne becomes a Supernal Verge keyed to her Exarch, inhabited by Supernal Entities loyal to the Throne. Including soul stones from Seers with Prelacy linked to a different Exarch causes the Temple to collapse and immediately destroys all soul stones involved.\n     Drawback: Once the Exarchs have given a command, they expect it to be carried out without delay. The character may only earn Arcane Beats from their other Obsessions in a chapter when they have already earned one for following the one granted by Mystery Commands.' },
            { name: 'Sanctum', type: 'supernal', variableCost: true, minCost: 1, maxCost: 5, prerequisite: 'Safe Place', effect: '     Your character has a Sanctum, in which she can safely practice her art away from prying eyes. This might be a dark cave, an apartment, a pocket dimension, or any other secure location she can claim. This Merit must be tied to a Safe Place Merit, and similarly can be shared within a cabal.\n     Add her Merit dots to her Gnosis within the Sanctum for determining spell control. She can leave the Sanctum and retain those benefits on previously cast spells. But if she’s exceeded her Gnosis and adds any additional, controlled spells, the benefit goes away and she must Reach as if she’d cast each of those spells without the benefit.\n     For an additional three dots (which do not count toward the 1–5 limit), your character’s Sanctum includes a Demesne.' },
            { name: 'Shadow Name', type: 'supernal', variableCost: true, minCost: 1, maxCost: 3, prerequisite: '', effect: '     Your character has a particularly developed magical persona, and is almost a different person when acting as a mage than in her mundane life. When purchasing this Merit, determine the Shadow Name and its symbolism. The character may use those symbols as a persona tool in spellcasting, worth this Merit’s dots. Additionally, apply dots in this Merit as a Withstand rating to spells that attempt to identify her or cast on her using the Sympathetic Range Attainment when in her mundane persona, to spells using the Temporal Sympathy Attainment targeting a time when she was in her mundane persona, and as a dice penalty to mundane skill rolls relating to identifying her as the same person as her magical self.' },
            { name: 'Techne', type: 'supernal', variableCost: false, minCost: null, maxCost: 2, prerequisite: 'Free Council Status •', effect: '     Your character uses Libertine practices in order to use cultural magical styles, sciences, and art forms as magical tools. Pick a focus for your character — for example, computer networking. Your character treats the focus as an Order tool for the Free Council as long as she includes it during spellcasting, and may further treat the presence of Sleepers engaging in the focus as a separate Order tool, as long as the spell is not obvious. If all mages casting a spell under the teamwork rules have this Merit representing the same focus, the leader’s spellcasting roll gains 8-Again. This Merit may be bought multiple times to represent different fields of study.' },
            { name: 'Allies', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     Allies help your character. They might be friends, employees, associates, or people your character has blackmailed. -105 meritsEach instance of this Merit represents one type of ally. This could be in an organization, a society, a clique, or an individual. You can take this Merit multiple times to represent different Allies. For example, your character may possess Allies (Police) •••, Allies (Organized Crime) ••, and Allies (Church) •.\n     Dots in this Merit reflect greater relationships and access. Work with the Storyteller to determine just what your character’s dots mean, and what she can request from her Allies reasonably.\n     When requesting help from Allies, the Storyteller assigns a rating between 1 and 5 to the favor. A character can ask for favors that add up to her Allies rating without penalty in one chapter. If she extends her influence beyond that, her player must roll Manipulation + Persuasion + Allies with a penalty equal to the favor’s rating. If the roll is successful, the group does as requested. Failed or successful, the character loses a dot of Allies (but Sanctity of Merits applies).' },
            { name: 'Alternate Identity', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 3, prerequisite: '', effect: '     Your character has established an alternate mundane identity; not a Shadow Name, but a second identity she can use among Sleepers and to lessen the risk of her real sympathetic name being uncovered by enemies. The level of this Merit determines the amount of scrutiny the identity can withstand. At one dot, the identity is superficial and unofficial: a simple but consistent costume, alias, and accent. It won’t hold up to any kind of official scrutiny, but it’s also easy to replace. At two dots, she’s supported her identity with paperwork and identification. It’s not liable to stand up to extensive research or Federal investigation, but it’ll turn away private investigators and internet hobbyists. At three dots, the identity can pass thorough inspection. The identity has been deeply entrenched in relevant databases.\n     The Merit also reflects the time the character has spent honing the persona. At 1 or 2 dots, she adds 1 die to all Subterfuge rolls to defend the identity. At 3 dots, she adds 2.\n     This Merit can be purchased multiple times, with each time representing an additional identity.' },
            { name: 'Contacts', type: 'Mundane', variableCost: false, minCost: null, maxCost: 1, prerequisite: '', effect: '     it represents a sphere or organization within which the character can garner information. Contacts do not provide services, only information. This may be face-to-face, email, by telephone, or even by séance in some strange instances.\n     Garnering information via Contacts requires a Manipulation + Social Skill roll, depending on the method the character uses and the relationship between the characters. The Storyteller should give a bonus or penalty depending on how relevant the information is to that particular Contact, whether accessing the information is dangerous, and if the character has maintained good relations or done favors for the Contact. These modifiers should range from –3 to +3 in most cases. If successful, the Contact provides the information.\n     You may purchase this Merit multiple times to reflect different sources.' },
            { name: 'Defensive Combat', type: 'Mundane', variableCost: false, minCost: null, maxCost: 1, prerequisite: 'Brawl • or Weaponry •; choose one when this Merit is selected', effect: '     You are trained in avoiding damage in combat. Use your Brawl or Weaponry to calculate Defense rather than Athletics. You can learn both versions of this Merit, allowing you to use any of the three Skills to calculate Defense. You cannot use Weaponry to calculate Defense, however, unless you actually have a weapon in hand.' },
            { name: 'Fame', type: 'Mundane', variableCost: false, minCost: 1, maxCost: 3, prerequisite: '', effect: '     Your character is recognized within a certain sphere, for a certain skill, or because of some past action or stroke of luck. This can mean favors and attention; it can also mean negative attention and scrutiny. When choosing the Merit, define what your character is known for. As a rule of thumb, one dot means local recognition, or reputation within a confined subculture. Two dots means regional recognition by a wide swath of people. Three dots means worldwide recognition to anyone that might have been exposed to the source of the fame. Each dot adds a die to any Social rolls among those who are impressed by your character’s celebrity. Fame also scatters sympathetic links; the Withstanding level of sympathy for spells targeting the character has a minimum of her Fame dots.\n     Drawback: Any rolls to find or identify the character by mundane means enjoy a +1 bonus per dot of the Merit. A character with Fame cannot have the Occultation Merit.' },
            { name: 'Language', type: 'Mundane', variableCost: false, minCost: null, maxCost: 1, prerequisite: '', effect: '     Your character is skilled with an additional language beyond her native tongue. Choose a language each time you buy this Merit. Your character can speak, read, and write in that language.' },
            { name: 'Library', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 3, prerequisite: '', effect: '     Your character has access to a plethora of information about a given topic. When purchasing this Merit, choose a Mental Skill. The Library covers that purview. On any extended roll involving the Skill in question, add the dots in this Merit.\n     This Merit can be purchased multiple times to reflect different Skills. Its benefits can also be shared by various characters, with permission.' },
            { name: 'Library, Advanced', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 5, prerequisite: 'Library •••, Safe Place (special)', effect: '     Your character not only possesses a massive, credible library, but she also hoards thorough information about highly secretive supernatural topics. For each dot in this Merit, choose a topic. This could be “vampires,” “mages,” or any other supernatural force in the Fallen World. When your character consults her library on one of those topics, take the Informed Condition relating to the topic. You can do this once per story, per topic.\n     Advanced Library has a special prerequisite; your character requires a Safe Place equal to its dot rating. As with Library, your characters can share a library location (and the players split the cost in dots).' },
            { name: 'Mentor', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     This Merit gives your character a teacher who provides advice and guidance. He acts on your character’s behalf, often in the background and sometimes without your character’s knowledge. While Mentors can be highly competent, they almost always want something in return for their services. The dot rating determines the Mentor’s capabilities, and to what extent he’ll aid your character.\n     When establishing a Mentor, determine what the Mentor wants from your character. This should be personally important to him, and it should reflect on the dot rating chosen. A onedot Mentor might just be an old bookworm interested in the occasional coffee chat about academic topics. A five-dot Mentor would want something astronomical, such as an oath to procure an ancient, cursed artifact that may or may not exist, in order to prevent a prophesized death.\n     Choose three Skills the Mentor possesses. You can substitute Resources for one of these Skills. Once per session, the character may ask her Mentor for a favor. The favor must involve one of those Skills or be within the scope of his Resources. The Mentor commits to the favor (often asking for a commensurate favor in return); if a roll is required, the Mentor is automatically considered to have successes equal to his dot rating. Alternately, the player may ask the Storyteller to have the Mentor act on her character’s behalf, without her character knowing or initiating the request.\n     As a guideline, Mentors who are Awakened mages bought for Mage characters should have Gnosis and Arcana higher than the character — at least half their dot rating higher Gnosis than the character, and twice the dot rating in Arcanum dots above the number of Arcanum dots the character has, while still obeying the rules for how high Arcana may rise with Gnosis (p. 86). Most Mentors will have an Order or Consilium Status of their own as well.' },
            { name: 'Mystery Cult Initiation', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     Your character is a member of a secret society, which can represent anything from a fraternity house or scholarly group to an organization directly controlled by an Awakened Order such as a Cryptopoly or the Labyrinth. This Merit may also represent membership of a Nameless Order for mage not in one of the six main Orders.\n     Dots in this Merit act as Status for other members, as well as additional benefits defined when the Merit is first purchased. The following are guidelines; use them to craft your own cults:\n     • A Skill Specialty or one-dot Merit pertaining to the lessons taught to initiates.\n     •• A one-dot Merit\n     ••• A Skill dot or a two-dot Merit\n     •••• A three-dot Merit\n     ••••• A three-dot Merit or a major advantage not reflected in game traits.\n     When this Merit would grant a character a Merit she does not qualify for (such as Awakened-only Merits or Sleepwalker-only ones), she gains the value of the reward in Merit dots instead.' },
            { name: 'Professional Training', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     Your character has extensive training in a particular profession, which offers distinct advantages in a handful of fields. When choosing this Merit, define a Profession for your character and choose two Skills to be Asset Skills, which the advantages of the Merit will affect. \n     Networking (•): At the first level of Professional Training, your character builds connections within her chosen field. Take two dots of Contacts relating to that field.\n     Continuing Education (••): With repeated efforts in her field of choice, your character tends toward greater successes. When making a roll with her Asset Skills, she benefits from the 9-Again quality.\n     Breadth of Knowledge (•••): Due to advancement in her field, she’s picked up a number of particular bits of information and skill unique to her work. Choose a third Asset Skill and take two Specialties in your character’s Asset Skills.\n     On the Job Training (••••): With the resources at her disposal, your character has access to extensive educational tools and mentorship available. Take a Skill dot in an Asset Skill. Whenever you purchase a new Asset Skill dot, take a Beat.\n     The Routine (•••••): With such extensive experience in her field, her Asset Skills have been honed to a fine edge and she’s almost guaranteed at least a marginal success. Before rolling, spend a Willpower point to apply the rote action quality to an Asset Skill. This allows you to reroll all the failed dice on the first roll.' },
            { name: 'Resources', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     This Merit reflects your character’s disposable income. She might live in an upscale condo, but if her income is tied up in the mortgage and in child support payments, she might have little money to throw around. Characters are assumed to have basic necessities without Resources.\n     The dot rating determines the relative amount of disposable funding the character has available, depending on your particular chronicle’s setting. The same amount of money means completely different things in a game set in Silicon Valley, compared to one set in the Detroit slums. One dot is a little spending money here and there. Two is a comfortable, middle-class wage. Three is a nicer, upper-middle-class life. Four is moderately wealthy. Five is filthy rich.\n     Every item has an Availability rating. Once per chapter, your character can procure an item at her Resources level or lower, without issue. Obtaining an item one Availability above her Resources reduces her effective Resources by one dot for a full month, since she has to rapidly liquidate funds. She can procure items two Availability below her Resources without limit (within reason). For example, a character with Resources •••• can procure as many Availability •• disposable cellphones as she needs.' },
            { name: 'Retainer', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     Your character has an assistant, sycophant, servant, or follower on whom she can rely. Establish who this companion 107 meritsis and how he was acquired. It may be as simple as a paycheck. He might owe your character his life. However it happened, your character has a hold on him.\n     A Retainer is more reliable than a Mentor and more loyal than an Ally. On the other hand, a Retainer is a lone person, less capable and influential than the broader Merits.\n     The Merit’s dot rating determines the relative competency of the Retainer. A one-dot Retainer is mildly useful, mostly for reliably taking on menial tasks; sometimes you don’t need to be wowed, you just need to get a thing from point A to point B. A three-dot Retainer is a professional in his field, someone capable in his line of work. A five-dot Retainer is one of the best in her class. If a Retainer needs to make a roll, if it’s within her field, double the dot rating of the Merit and use it as a dice pool. For anything else, use the dot rating as a dice pool. This Merit can be purchased multiple times to represent multiple Retainers.' },
            { name: 'Safe Place', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     Your character has somewhere she can go where she can feel secure. While she may have enemies that could attack her there, she’s prepared and has the upper hand. The dot rating reflects the security of the place. A one-dot Safe Place might be equipped with basic security systems or a booby trap at the windows and door. A five-dot hideaway could have a security crew, infrared scanners at every entrance, or trained dogs. Each place could be an apartment, a mansion, or a hidey-hole.\n     Unlike most Merits, multiple characters can contribute dots to a single Safe Place, combining their points into something greater. A Safe Place gives an Initiative bonus equal to the Merit dots. This only applies to characters with dots invested in the Safe Place. \n     Any efforts to breach the Safe Place suffer a penalty equal to the Merit dots invested. If the character desires, the Safe Place can include traps that cause lethal damage (up to a maximum of the Merit rating) to intruders; it is the player’s choice as to how much damage a given trap inflicts. This requires that the character have at least a dot in Crafts. The traps may be avoided with a Dexterity + Larceny roll, penalized by the Safe Place dots.' },
            { name: 'Status', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 5, prerequisite: '', effect: '     Your character has standing, membership, authority, control over, or respect from a group or organization. This may reflect official standing, or informal respect. No matter the source, your character enjoys certain privileges within that structure.\n     Each instance of this Merit reflects standing in a different group or organization. Each affords its own unique benefits. As you increase your dot ratings, your character rises in prominence in the relevant group.\n     Status only allows advantages within the confines of the group reflected in the Merit. Status (Organized Crime) won’t help if your character wants an official concealed carry firearms permit, for example.\n     Status provides two major advantages: First, your character can add her Status to any Social roll involving those over whom she has authority or sway. Second, she has access to group facilities, resources, and funding. Dependent on the group, this could be limited by red tape and requisitioning processes. It’s also dependent on the resources the particular group has available. \n     Drawback: Status requires upkeep, and often regular duties are required. If these duties are not upheld, the Status may be lost. The dots will not be accessible until the character re-establishes her standing. In our Organized Crime example, your character may be expected to pay protection money, offer tribute to a higher authority, or undertake felonious activities.' },
            { name: 'Striking Looks', type: 'Mundane', variableCost: true, minCost: 1, maxCost: 2, prerequisite: '', effect: '     Your character is stunning, alarming, commanding, repulsing, threatening, charming, or otherwise worthy of attention. Determine how your character looks and how people react to that. For one dot, your character gets a +1 bonus on any Social rolls that would be influenced by her looks. For two dots, the benefit increases to +2. Depending on the particulars, this might influence Expression, Intimidation, Persuasion, Subterfuge, or other rolls. \n     Drawback: Attention is a double-edged sword. Any rolls to spot, notice, or remember your character gain the same dice bonus. Sometimes, your character will draw unwanted attention in social situations. This could cause further complications.' },
            { name: 'Trained Observer', type: 'Mundane', variableCost: false, minCost: null, maxCost: 1, prerequisite: 'Wits ••• or Composure •••', effect: '     Your character has spent years in the field, catching tiny details and digging for secrets. She might not have a better chance of finding things, but she has a better chance of finding important things. Any time you make a Perception roll (usually Wits + Composure), you benefit from the 9-Again quality. With the three-dot version, you get 8-Again.' },
            { name: 'Trained Observer', type: 'Mundane', variableCost: false, minCost: null, maxCost: 3, prerequisite: 'Wits ••• or Composure •••', effect: '     Your character has spent years in the field, catching tiny details and digging for secrets. She might not have a better chance of finding things, but she has a better chance of finding important things. Any time you make a Perception roll (usually Wits + Composure), you benefit from the 9-Again quality. With the three-dot version, you get 8-Again.' },
            { name: 'True Friend', type: 'Mundane', variableCost: false, minCost: null, maxCost: 3, prerequisite: '', effect: '     Your character has a true friend. While that friend may have specific functions covered by other Merits (Allies, Contacts, Retainer, Mentor, etc.), True Friend represents a deeper, truly trusting relationship that cannot be breached. Unless your character does something egregious to cause it, her True Friend will not betray her. As well, the Storyteller cannot kill her True Friend as part of a plot without your express permission. Any rolls to influence a True Friend against your character suffer a –5 penalty. As well, once per story, your character can regain 1 spent Willpower by having a meaningful interaction with her True Friend.' }]

        return m;
    }

    get allConditions() {
        let x = [
            { name: 'CHARMED', effect: 'Your character enjoys the protection of magical good fortune. This may spare her from serious injury, ensure that she meets someone whose acquaintance will be valuable to her later, guarantee that she isn’t the one who gets the short straw, or help her win an important game of chance. You may invoke this twist of fate at any time as a reflexive action. If used to avoid injury, resolving this Condition reduces the damage to 1. Otherwise, neither you nor the mage knows the exact nature this good fortune will take when it manifests — only that it will have a significant impact.', exampleSkills: '', possibleSources: 'This is commonly the effect of a boon granted by Fate magic.', resolution: ' Your character narrowly avoids some misfortune or enjoys a lucky break; the Condition is resolved as described above.', beat: 'n/a' },
            { name: 'CONNECTED (PERSISTENT)', effect: 'Your character has made inroads with a specified group. While she has this Condition, she gets a +2 to all rolls relating to that group. Alternately, she can shed this Condition to gain a one-time automatic exceptional success on the next roll to influence or otherwise take advantage of the group. Once Connected is resolved, the character is considered to have burned her bridges and is no longer an accepted member. The character may be able to regain Connected with the specified group per Storyteller approval.', exampleSkills: 'Politics, Socialize', possibleSources: ' The character loses her membership or otherwise loses her standing with the group.', resolution: 'The character is asked to perform a favor for the group that inconveniences her.', beat: '' },
            { name: 'DEFEATED', effect: 'Your character has been beaten in the Duel Arcane, humiliated, and made completely open and exposed to an enemy. For the duration of this Condition, the character cannot spend Willpower or use magic in any way to harm the mage she was defeated by. Further, the mage who won the Duel has Strong sympathy with the loser.', exampleSkills: '', possibleSources: '', resolution: ' This Condition lingers until the character can greatly humble himself in public at great personal cost, or until the winner of the Duel takes advantage of the sympathy in a way that injures or abuses the loser. Take a Beat.', beat: 'Take a Beat whenever your character is abused or humiliated as a result of her defeat.' },
            { name: 'DEPRIVED', effect: 'Your character suffers from an addiction. She is unable to get her fix, however, leaving her irritable, anxious, and unable to focus. Remove one from her Stamina, Resolve, and Composure dice pools. This does not influence derived traits; it only influences dice pools that use these Attributes.', exampleSkills: '', possibleSources: '', resolution: 'Your character indulges her addiction.', beat: 'n/a' },
            { name: 'DISABLED (PERSISTENT)', effect: 'Your character has limited or no ability to walk. Her Speed trait is effectively 1. She must rely on a wheelchair or other device to travel. A manual wheelchair’s Speed is equal to your character’s Strength and requires use of her hands. Electric wheelchairs have a Speed of 3, but allow the free use of the character’s hands. An injury can cause this Condition temporarily, in which case it is resolved when the injury heals and the character regains mobility.', exampleSkills: '', possibleSources: '', resolution: 'The character’s disability is cured by mundane or supernatural means.', beat: 'Your character’s limited mobility inconveniences your character and makes her slow to respond.' },
            { name: 'EMBARRASSING SECRET', effect: 'Your character has a secret from his past that could come back to haunt him. If this secret gets out, he could be ostracized or maybe even arrested. If it becomes known, this Condition is exchanged for Notoriety (p. 317).', exampleSkills: '', possibleSources: '', resolution: 'The character’s secret is made public, or the character does whatever is necessary to make sure it never comes to light.', beat: ' n/a' },
            { name: 'ENERVATED (PERSISTENT)', effect: 'The character is in the second stage of soul loss. Her instinctive efforts to shore up her Willpower by giving into her urges have failed, her Integrity has gone, and her Willpower is now fading. In addition to the effects of Soulless, she can no longer regain Willpower through her Virtue, only her Vice.\n     Indulging herself brings diminishing returns — whenever she does so, her permanent Willpower drops by one dot before she regains Willpower points to the new maximum. Mages lose a dot of Gnosis every time their Willpower drops, to a minimum of 0.', exampleSkills: '', possibleSources: '', resolution: ' This Condition is only removed if the character regains her soul.', beat: ' You lose a dot of Willpower' },
            { name: 'FUGUE (PERSISTENT)', effect: 'Something terrible happened. Rather than deal with it or let it break you, your mind shuts it out. You are prone to blackouts and lost time. Whenever circumstances become too similar to the situation that led to your gaining this Condition, the player rolls Resolve + Composure. If you fail the roll, the Storyteller controls your character for the next scene; your character, left to his own devices, will seek to avoid the conflict and get away from the area.', exampleSkills: '', possibleSources: '', resolution: ' Regain a dot of Integrity or Wisdom, lose anotherdot of Integrity or Wisdom, or achieve an exceptional success on a breaking point or Act of Hubris.', beat: 'You enter a fugue state as described above.' },
            { name: 'GUILTY', effect: 'Your character is experiencing deep-seated feelings of guilt and remorse. This Condition is commonly applied after a successful breaking point roll (p. 299). While the character is under the effects of this Condition, he receives a –2 to any Resolve or Composure rolls to defend against Subterfuge, Empathy, or Intimidation rolls.', exampleSkills: '', possibleSources: '', resolution: 'The character confesses his crimes and makes restitution for whatever he did.', beat: 'n/a' },
            { name: 'HUMBLED', effect: 'You have been reminded of the power of humanity, and your arrogance and pride crumble away. Any symbol or person that triggered this feeling in you creates a feeling of admiration that you are highly protective of. You cannot bring yourself to harm the source of your humbling, and treat it or him as a source of great wisdom and solace.', exampleSkills: '', possibleSources: ' Extreme sacrifice on your behalf. Certain Sleepwalker Merits.', resolution: 'The character sacrifices of himself in dramatic fashion in the name of the person or symbol that humbled him in the first place.', beat: ' Any time the character might act with hubris or arrogance, if the player chooses to take a dramatic failure on that roll rather attempt it, take a Beat.' },
            { name: 'INFORMED', effect: 'Your character has a breadth of research information based on the topic she investigated. When you make a roll relating to the topic, you may choose to resolve this Condition. If you resolve it and the roll fails, it is instead considered to have a single success. If it succeeds, the roll is considered an exceptional success.\n     The roll that benefits from the Informed Condition can be any relevant Skill roll. For example, a character with Informed (Werewolves) might gain its benefits when using researched information to build a silver bear trap with the Crafts Skill. Combat rolls cannot benefit from this Condition.', exampleSkills: '', possibleSources: '', resolution: 'Your character uses her research to gain information; the Condition is resolved as described above.', beat: 'n/a' },
            { name: 'INSPIRED', effect: 'Your character is deeply inspired. When your character takes an action pertaining to that inspiration, you may resolve this Condition. An exceptional success on that roll requires only three successes instead of five and you gain a point of Willpower.', exampleSkills: '', possibleSources: '', resolution: 'You spend inspiration to spur yourself to greater success, resolving the Condition as described above.', beat: 'n/a' },
            { name: 'LEVERAGED', effect: 'Your character has been blackmailed, tricked, convinced, or otherwise leveraged into doing what another character wishes. You may have the Leveraged Condition multiple times for different characters. Any time the specified character requests something of you, you may resolve this Condition if your character does as requested without rolling to resist.', exampleSkills: '', possibleSources: '', resolution: 'Your character may either resolve the Condition by complying with a request as above, or if you apply the Leveraged Condition to the specified character.', beat: 'n/a' },
            { name: 'MADNESS (PERSISTENT)', effect: 'Your character saw or did something that jarred her loose from reality. This isn’t a mental illness born of brain chemistry — that, at least, might be treatable. This madness is the product of supernatural tampering or witnessing something that humanity was never meant to comprehend. The Storyteller has a pool of dice equal to 10 – (character’s Integrity or Wisdom). Once per chapter, the Storyteller can apply those dice as a negative modifier to any Mental or Social roll made for the character.', exampleSkills: '', possibleSources: '', resolution: 'Regain a dot of Integrity or Wisdom, lose anotherdot of Integrity or Wisdom, or achieve an exceptional success on a breaking point or Act of Hubris.', beat: 'The character fails a roll because of this Condition.' },
            { name: 'MEGALOMANIACAL', effect: 'Your character is consumed by her own aptitude. She sees greatness in her every action, and that sense of greatness breeds righteousness. She cannot see her behavior as hubris, and she refuses to acknowledge any failings. After all, she’s mastered the forces of the universe, right?\n     Your character automatically fails any actions using the Empathy Skill. As well, she gains an additional “Selfish” Vice and a “Dominate Others” Obsession that replaces one of her current Obsessions so long as she maintains this Condition.', exampleSkills: '', possibleSources: '', resolution: 'Hurt someone important to you in such a way that it risks further Wisdom loss.', beat: 'n/a' },
            { name: 'MUTE (PERSISTENT)', effect: 'Your character cannot speak. Any communication must be done through writing, gestures, or hand signs. Illness, injury, or supernatural powers can inflict this Condition on a temporary basis.', exampleSkills: '', possibleSources: '', resolution: 'The character regains her voice through mundane or supernatural means.', beat: 'Your character suffers a limitation or communication difficulty that heightens immediate danger' },
            { name: 'MYSTERY COMMANDS (PERSISTENT)', effect: 'Your character hears the voice of the Exarchs, sees their words scrawled in her mind, and otherwise receives commands from deep within her Oneiros. Her Exarch’s will becomes an additional Obsession, with all according benefits.\n     The Storyteller will occasionally give commands as part of this Merit. Additionally, your character can take actions in the name of her Exarch and reverse-engineer messages out of the context. Most any action that aligns with her Exarch’s basic whims should apply to this Condition.', exampleSkills: '', possibleSources: '', resolution: ' Your character cuts off ties to her Exarch. Traitors are not tolerated, and other characters with this Condition will be sent to punish her, or kill her if she will not return to the Throne’s service.', beat: ' Your character faces meaningful setback, danger, or sacrifice on account of the commands.' },
            { name: 'NOTORIETY', effect: 'Whether or not your character actually did something heinous in the past, the wrong people think he did and now he’s ostracized by the general public. Your character suffers a –2 on any Social rolls against those who know of his notoriety. If using Social maneuvering (p. 215), the character must open one extra Door if his target knows of his notoriety.', exampleSkills: '', possibleSources: '', resolution: 'The story is debunked or the character’s name is cleared.', beat: 'n/a' },
            { name: 'OBSESSION (PERSISTENT)', effect: 'Something’s on your character’s mind and she just can’t shake it. She gains the 9-Again quality on all rolls related to pursuing her obsession. On rolls that are unrelated to her obsession, she loses the 10-Again quality. Obsession can be a temporary quality per Storyteller approval.', exampleSkills: '', possibleSources: '', resolution: 'The character sheds or purges her fixation.', beat: ' Character fails to fulfill an obligation due to pursuing her Obsession.' },
            { name: 'RAMPANT', effect: 'Your character is reckless and forceful with her magic. She will not hesitate to use it to solve any minor problem. If your character has a reasonable magical solution to a problem, to use a mundane solution requires a point of Willpower. This Willpower does not add to the dice roll. As well, she gains a “Wield Magic Indiscriminately” Obsession that replaces one of her current Obsessions so long as she maintains this Condition.', exampleSkills: '', possibleSources: '', resolution: 'Suffer a Paradox.', beat: 'n/a' },
            { name: 'SHAKEN', effect: 'Something has severely frightened your character. Any time your character is taking an action where that fear might hinder her, you may opt to fail the roll and resolve this Condition. This Condition can be imposed by undergoing a breaking point roll.', exampleSkills: '', possibleSources: '', resolution: 'The character gives into her fear and fails a roll as described above.', beat: 'n/a' },
            { name: 'SPOOKED', effect: 'Your character has seen something supernatural — not overt enough to terrify her, but unmistakably otherworldly. How your character responds to this is up to you, but it captivates her and dominates her focus.', exampleSkills: '', possibleSources: '', resolution: 'This Condition is resolved when your character’s fear and fascination causes her to do something that hinders the group or complicates things (she goes off alone to investigate a strange noise, stays up all night researching, runs away instead of holding her ground, etc.).', beat: 'n/a' },
            { name: 'STEADFAST', effect: 'Your character is confident and resolved. When you’ve failed a roll, you may choose to resolve this Condition to instead treat the action as if you’d rolled a single success. If the roll is a chance die, you may choose to resolve this Condition and roll a single regular die instead.', exampleSkills: '', possibleSources: '', resolution: 'Your character’s confidence carries him through and the worst is avoided; the Condition is resolved as described above.', beat: ' n/a' },
            { name: 'STRAINED', effect: 'Your character has narrowly avoided Integrity loss due to witnessing magic. Take –1 to resist the next time you suffer a breaking point and must roll. If you have the Strained Merit, you may opt to not roll, and the Condition will build: each consecutive time you avoid rolling a breaking point contributes an additional –1 to your next breaking point roll, to a maximum of –5. After –5, you can no longer push the horror away, your character snaps, and you automatically roll for the breaking point at –5.', exampleSkills: '', possibleSources: '', resolution: 'The character suffers Integrity loss. Take an additional Beat atop that of the breaking point.', beat: ' n/a' },
            { name: 'SWOONED', effect: 'Your character is attracted to someone and is vulnerable where they are concerned. He may have the proverbial “butterflies in his stomach” or just be constantly aware of the object of his affection. A character may have multiple instances of this Condition, reflecting affection for multiple characters. He suffers a –2 to any rolls that would adversely affect the specified character, who also gains +2 on any Social rolls against him. If the specified character is attempting Social maneuvering on the Swooned character, the impression level is considered one higher (maximum of perfect; see p. 215).', exampleSkills: '', possibleSources: '', resolution: 'Your character does something for his love interest that puts him in danger, or he opts to fail a roll to resist a Social action by the specified character.', beat: 'n/a' },
            { name: 'SOULLESS (PERSISTENT)', effect: 'The character is in the first stage of soul loss. Without a soul, she is more susceptible to possession — any dice pools to resist being taken over or possessed by another entity are at a –2 die penalty. The effects on Wisdom and Willpower, though, are more severe. For as long as she has this Condition, she does not regain Willpower through surrender or rest, and her use of Virtue and Vice is reversed. She may regain one Willpower point per scene by fulfilling her Virtue without having to risk herself, and regains full Willpower once per chapter by fulfilling her Vice in a way that poses a threat to herself.\n     Regaining Willpower through Vice, though, is now a breaking point against Integrity with a –5 penalty unless the character has reached Integrity 1, or an Act of Hubris (roll 1 die) unless she has reached Wisdom 1 for mages.', exampleSkills: '', possibleSources: '', resolution: 'Regain a soul.', beat: 'You lose Wisdom or Integrity because you indulged your Vice.' },
            { name: 'SOUL SHOCKED', effect: 'Your character has been killed while on a sojourn outside her physical body, resulting in a shocked sense of self. Upon gaining this Condition, roll her current Willpower points (not dots) as a dice pool. Ignore 10-Again on this roll, and do not roll a chance die if she has no Willpower left. She keeps one Willpower point per success, and immediately loses the remainder. While this Condition is in effect, your character does not regain Willpower from Virtue, Vice, or equivalent traits. She still regains Willpower from rest, surrender, and any other means of regaining Willpower', exampleSkills: '', possibleSources: '', resolution: 'Regaining full Willpower.', beat: 'n/a' },
            { name: 'THRALL (PERSISTENT)', effect: 'The character has fully succumbed to the effects of soullessness. She may not spend Willpower points for any reason, may not use her Defense in combat, may not spend Experiences, and suffers all the effects of the Broken Condition (see p. 314) as well. Mages can no longer cast spells. The player should only continue playing a character with this Condition if she stands a chance of regaining a soul.', exampleSkills: '', possibleSources: '', resolution: 'Regain a soul.', beat: 'Gain a Beat whenever the character is victimized as a result of her Condition.' },
            { name: 'TRIUMPHANT', effect: 'he character has won a Duel Arcane and her triumph radiates through her Nimbus for any Awakened to sense. Until the Condition is resolved, the character gets an exceptional success on three successes rather than five on any Social rolls with anyone in Awakened society aware of the victory.', exampleSkills: '', possibleSources: '', resolution: 'The first time you fail a Social roll with a member of Awakened society, take a Beat, and the Condition ends.', beat: 'Gain a Beat any time you throw your success in someone’s face, even if it risks making him angry or resentful.' }
        ]
        return x;
    }

    get allTilts() {
        let t = [
            { name: 'ARM WRACK', preDesc: '     Your arm burns with pain and then goes numb. It could be dislocated, sprained, or broken: whatever’s wrong with it, you can’t move your limb.', effect: 'If your arm’s broken or otherwise busted, you drop whatever you’re holding in that arm and can’t use it to attack opponents — unless you’ve got the Ambidextrous Merit, you suffer off-hand penalties for any rolls that require manual dexterity. If this effect spreads to both limbs, you’re down to a chance die on any rolls that require manual dexterity, and –3 to all other Physical actions.', cause: '     Some supernatural powers can cripple a victim’s limbs or break bones with a touch. A character can have his arm knocked out by a targeted blow to the arm (–2 penalty) that deals more damage than the character’s Stamina. A targeted blow to the hand inflicts this Tilt if it does any damage.', end: '     If the Tilt is inflicted as a result of an attack, mark an ‘x’ under the leftmost Health box inflicted in that attack; the Tilt ends when the damage that caused it has healed. If aggravated damage inflicts this Tilt, the character loses the use of his arm (or straight up loses his arm) permanently.' },
            { name: 'BEATEN DOWN', preDesc: '     The character has had the fight knocked out of him', effect: ' The character cannot take active part in the fight without extra effort. The player must spend a point of Willpower each time he wants the character to take a violent action in the fight. He can still run, Dodge, and apply Defense. If he wishes to take another action, the Storyteller should judge whether the action is aggressive enough to require the expenditure.', cause: '     The character suffers bashing damage in excess of his Stamina or any amount of lethal damage.', end: '     The character surrenders and gives the aggressor what he wants. At this point, the character regains a point of Willpower and takes a Beat, but can take no further action in the fight. If the aggressor’s intent is to kill or injure the character, obviously surrender isn’t a good option.' },
            { name: 'BLINDED', preDesc: '     The character’s eyes are damaged or removed, or the character is placed in a situation where eyesight is eliminated (a pitch-black room or a supernatural effect).', effect: ' The character suffers a –3 penalty to any rolls that rely on vision — including attack rolls — and halves his Defense if one eye is blinded. That penalty increases to –5 and losing all Defense if both eyes are affected.', cause: '     The most common means of inflicting the tilt is to severely impair the target’s eyesight (using a blindfold, etc). An attacker can inflict temporary blindness by slashing at her opponent’s brow, throwing sand into his eyes, or kicking up dirt. This requires an attack roll of Dexterity + Athletics with a –3 penalty; the victim’s Defense applies to this attack. If it succeeds, the target is Blinded for the next turn.\n     Blindness can also be inflicted by dealing damage to the target’s eyes — a specified attack with a –5 penalty (see Specified Targets, p. 220). A successful attack normally damages one eye. It takes an exceptional success to totally blind an attacker.', end: '      If an attack against the character’s eye does any points of damage, mark an “x” under the leftmost Health box inflicted in that attack. If the damage inflicted is aggravated the character loses vision in that eye permanently. Otherwise, the Condition ends when the damage that caused the Tilt is healed.' },
            { name: 'BLIZZARD (ENVIRONMENTAL)', preDesc: '     Heavy snowfall carpets the ground and just keeps falling, whipped up by howling winds into a barrage of whirling white.', effect: 'Blizzards make it very hard to see for any real distance. Rolls to see things close to the character’s person, out to arm’s length away, suffer a –1 penalty. Each additional 10 yards inflicts an additional –1 penalty (cumulative) on all visual Perception rolls. This penalty also applies to ranged attack rolls. Moving through snow is difficult. Every four inches of snow applies a –1 penalty to appropriate Physical rolls, including combat rolls, Athletics, and so forth. The Blizzard Tilt rarely applies by itself — the Storyteller may also inflict any or all of the Extreme Cold, Heavy Winds, or Ice Tilts (all found below)', cause: '     The weather is out of the control of most characters — but not necessarily mages. The Storyteller should telegraph an incoming natural blizzard before it hits, but some willworkers may be powerful enough to call down frozen hell from a clear blue sky.', end: '     Without supernatural powers, characters can’t “end” a blizzard. The best they can manage is to escape 320 appendix three: conditions and tiltsthe weather or wait for it to stop. Proper equipment (such as goggles and snow boots) can add +1 to +3 to a roll, offsetting some of the penalties. If someone is causing this Tilt through a supernatural power, it’s possible that the characters could disrupt his concentration.' },
            { name: 'DEAFENED', preDesc: '     The character can’t hear. Maybe he’s suffering intense tinnitus or can only hear the roaring of blood in his ears, or he just plain can’t hear', effect: 'If the character is deaf in one ear, he suffers a –3 penalty to hearing-based Perception rolls. A character who is struck deaf in both ears only gets a chance die on hearing-based Perception rolls, and suffers a –2 penalty to all combat-related dice rolls — suddenly losing the ability to hear the people around you is tremendously disorienting.', cause: '     A particularly loud noise within 10 feet of the character may cause temporary hearing loss as though the character were deaf in both ears. Alternatively, a targeted attack on the ear — at a –4 penalty — can deafen a character. Supernatural creatures with heightened senses can be deafened by loud noises at greater distances.', end: '     Deafness from loud noises fades after 10 – (victim’s Stamina + Resolve) turns. If an attack against the character’s ear does any points of damage, mark an ‘x’ under the leftmost Health box inflicted in that attack. If the damage inflicted is aggravated, the character loses hearing in the ear permanently. Otherwise, the Condition ends when the damage that caused the Tilt is healed.' },
            { name: 'DRUGGED', preDesc: '     The character’s mind is addled by mind-altering substances, such as drink or drugs.', effect: 'A generic narcotic can be represented with one set of modifiers: The character suffers a –2 modifier to Speed (and static Defense, if used) and a –3 penalty to all rolls in combat, including Defense and perception. The character also ignores wound penalties', cause: '     If the character has chosen to take drugs, then he suffers the effects. To administer drugs to another character is a Dexterity + Weaponry attack, suffering a –1 modifier for the improvised weapon. If the drug has to go in to a specific body part (such as an arm or mouth), it requires an attack against a specified target.', end: '     A generic narcotic lasts for 10 – (victim’s Stamina + Resolve) hours. This time is halved by medical help, such as pumping the victim’s stomach or flushing his system.' },
            { name: 'EARTHQUAKE (ENVIRONMENTAL)', preDesc: '     Everything shudders and shakes; huge rents and holes tear the ground wide open.', effect: 'Earthquakes don’t last long, but they don’t have to. When the quake’s actually occurring, all Dexterity-based dice pools (and Defense) suffer a –1 to –5 penalty depending on the quake’s severity. Characters take between one and three points of lethal damage per turn of the quake’s duration, though a reflexive Stamina + Athletics roll can downgrade that damage to bashing — or cancel it entirely on an exceptional success.', cause: '     Without tremendous supernatural power, it’s almost impossible to cause an earthquake. A character who detonates a powerful explosive underground might simulate the effects over a city-block for a few seconds', end: '     Earthquakes are fortunately very quick events. It’s very rare for one to last more than a minute (20 turns), so waiting them out is the best course of action.' },
            { name: 'EXTREME COLD (ENVIRONMENTAL)', preDesc: '     Bone-chilling winds bite through the character, or trudging through knee-deep snow takes all of the sensation from his limbs. Any time the temperature gets down below zero degrees Celsius (32 degrees Fahrenheit), a character can suffer from the cold’s effects. This Tilt can sometimes be personal, either as a result of a medical Condition such as hypothermia or a supernatural power.', effect: 'When the temperature is below freezing, characters can’t heal bashing damage — the extreme temperature deals damage at the same rate normal characters heal it (a cut might turn to frostbite, for instance). Supernatural beings and characters who heal faster than normal instead halve their normal healing rate. For every hour that a character is continuously affected by this Tilt, he accrues a –1 penalty to all rolls. When that penalty hits –5 dice, he instead suffers one point of lethal damage per hour.', cause: '     A character can suffer this Tilt from being in a frozen environment — whether he’s outside in the Arctic tundra or in a walk-in freezer. Inflicting the Tilt is reasonably straightforward: Throw the victim into a freezing lake or lock him in a freezer for long enough and he’ll develop hypothermia.', end: '     The best way to escape the freezing cold is to find a source of warmth — either a building with working heating, or warm bundled clothing. A character who has hypothermia requires medical attention.' },
            { name: 'EXTREME HEAT (ENVIRONMENTAL)', preDesc: '     The character might be stumbling through the desert with the sun beating down on him, or running through the steam-tunnels surrounding an old boiler room. This Tilt can also be personal, the result of a debilitating fever that spikes his temperature far above the norm. Extreme heat is normally anything above 40 degrees Celsius (104 degrees Fahrenheit) — this includes both environmental temperature and internal body temperature due to fever.', effect: 'When the temperature is far above normal, characters can’t heal bashing damage — the extreme temperature deals damage at the same rate normal characters heal it (a cut might heal, but it’s replaced by sunburn or sunstroke). Supernatural beings and characters who heal faster than normal instead halve their normal healing rate. For every hour that a character is continuously affected by this Tilt, he accrues a –1 penalty to all rolls. When that penalty hits –5 dice, he instead suffers a point of lethal damage per hour', cause: '      This Tilt is usually caused by environmental factors — being out at noon in the desert or spending too long in a sauna or forge. Even a fever is the result of an infection, rather than something that an opponent can force on a character. It’s possible to create this Tilt on a given character: securing someone to a chair right next to an old, inefficient boiler, or stranding them in the desert far from any shade.', end: '     The key to ending this Tilt is simple: Get out of the heat. In a desert or similar environment, finding shade is paramount. Elsewhere, the character needs to escape whatever is causing the abnormal temperatures.' },
            { name: 'FLOODED (ENVIRONMENTAL)', preDesc: '     Some liquid — brackish water, mud, gore, or raw sewage — is high enough to impede the character’s progress.', effect: 'Each foot of liquid inflicts a –2 penalty to all Physical dice pools. If the water goes up over her head, a character has to swim (Dexterity + Athletics) with a penalty appropriate for the speed of flooding. Alternatively, she can try to hold her breath (Stamina + Composure) if she cannot get her head above the rising waters.', cause: '     Normally, this Tilt is the result of heavy rain, sudden snowmelt, or a broken water main. Characters can cause this Tilt by smashing up a water heater or blowing up a small dam. Some supernatural creatures may be able to call floods down onto a region.', end: '     Characters can escape flooding by getting to high ground, which is enough to mitigate this Tilt. A longterm fix would require draining the floodwaters, but each flood requires its own solution.' },
            { name: 'HEAVY RAIN (ENVIRONMENTAL)', preDesc: '     Torrential rain lashes down in knives, bouncing high off the sidewalk. The sound of rain on the ground is a constant hammering rumble that goes on without end, like dropping ball bearings on a tin roof. Thick gray curtains of water obscure vision.', effect: 'Heavy rains — approaching tropical storm levels or worse — cause a Perception penalty of –3 dice to both vision and hearing. Rain’s hard to see through, but it’s also loud. If the rains carry on for an hour or more, the Flooded Tilt will soon follow. This Tilt is often accompanied by Heavy Winds; a character trapped out in Heavy Rains might come under the effects of Extreme Cold.', cause: '     Short of supernatural power or a fleet of cloud-seeding aircraft, Heavy Rain is the result of natural weather patterns.', end: '     The best way out of the rain is to get indoors. Unless it’s the start of some sodden apocalypse, the characters can wait for the weather to ease.' },
            { name: 'HEAVY WINDS (ENVIRONMENTAL)', preDesc: '     Howling winds buffet at the characters, whipping street furniture into the air, tearing the roofs from buildings. Powerful winds can toss cars around like toys. Anyone out in the winds feels like they’re taking a beating just for walking down the street.', effect: ' Heavy winds are loud, so characters suffer a –3 modifier to aural Perception rolls. Also the wind inflicts a penalty to all Physical rolls when out in the winds — including Drive rolls. Grade the wind from one to five — one is tropical storm level (around 40 MPH), three is hurricane level (around 80 MPH), and five is tornado level (150+ MPH). This is the penalty applied to Physical dice rolls. Characters outside in the maelstrom take damage from flying debris, taking bashing damage each turn equal to the wind’s rating. Characters can make a reflexive Dexterity + Athletics roll to avoid damage.', cause: '     Heavy winds are a fact of life, from siroccos in the desert to tornados in the Midwest to wind shears everywhere.', end: '     Getting out of the wind is the best way to end this Tilt. Sometimes that’s as easy as sheltering in an automobile — as long as nobody tries to drive. Buildings provide more permanent shelter.' },
            { name: 'ICE (ENVIRONMENTAL)', preDesc: '     The ground’s covered in a mirror-smooth layer of ice that sends wheels spinning and people’s feet flying out from under them. The ice could be so thin as to be nearly invisible or a thick 322 appendix three: conditions and tiltslayer that’s the only thing keeping the characters from sinking into a frozen lake.', effect: 'When a character can’t trust her footing, divide her Speed in half and all Physical rolls (and Defense) suffer a –2 penalty. Attempting to move at full Speed increases the Physical penalty to –4. Any dramatic failure on a Physical roll inflicts the Knocked Down Tilt.', cause: '     This Tilt doesn’t just apply to icy conditions, but to any surface that’s slick and slippery, including a spill of industrial lubricant or just a really well-polished wooden or linoleum floor. Characters can use a Dexterity + Crafts roll to cover an area in industrial cleaner or mix up cleaning chemicals into a lubricant. If the Extreme Cold Tilt is in effect, even covering the area with water would do the trick.', end: '      “Get off the ice” is good advice, but that can take work. Characters can use heat or fire to melt ice, or throw down copious quantities of salt or grit to increase traction.' },
            { name: 'IMMOBILIZED', preDesc: '     Something holds the character fast, preventing him from moving. This could be a grappling opponent, a straightjacket wrapped with heavy chains, or a coffin secured on the outside with a padlock.', effect: 'The character can’t do anything but wriggle helplessly. He can’t apply Defense against incoming attacks and can’t take combat-related actions. If someone’s holding him down, he can spend a point of Willpower to deliver a head-butt or similar attack, but even that might not free him.', cause: '     The usual way to inflict this Tilt is through the Restrain grappling move. This often uses material means to prevent the victim from moving, such as binding limbs with duct tape or zip-ties, tossing the victim into a car trunk or similar tight space, or applying painful holds and joint locks.', end: '     An Immobilized target can break free by escaping from a grapple or snapping whatever binds her. If grappled, the character can struggle as normal but can only select the Break Free move on a success. If held by an item, the character must make a Strength + Athletics roll penalized by the item’s Durability. If a character’s arms and legs are both bound, he suffers a –2 penalty; this increases to –4 if he’s hog-tied. On a success, he snaps the bindings or breaks free. Each roll, successful or not, deals a point of bashing damage.' },
            { name: 'INSANE', preDesc: '     The character suffers from a panic attack, sudden imbalance, or a full-on psychotic break. Her pulse races and her mind cannot focus. The world’s an unstable place, and she’s unable to keep her balance.', effect: 'Someone suffering a psychotic break isn’t the sort of person to go down without a fight. Her stated intent might be irrational or just plain impossible, and she might have fewer ethical problems with using extreme violence to get what she wants. The character gains a +1 bonus to all combat rolls, but takes actions after everyone else (if two characters suffer from the Insane Tilt, both act after everyone else but compare Initiative as normal). A character suffering from this Tilt may spend Willpower, but the cost is two points instead of one for the same effect.', cause: '      Faced with extraordinary circumstances, any character with an appropriate Condition may gain the Insane Tilt. The Storyteller can call for a Resolve + Composure roll to resist a general anxiety that gnaws at the character’s mind; if the character fails, he gains the Tilt. If the character witnesses something truly horrific — a daughter watches her father walk to the end of the garden and shoot himself in the head, smiling all the while; a man stumbles into the wrong office at work and sees his co-workers feasting on the intern’s organs; a soldier sees her unit gunned down by a sniper while she can do nothing — the Storyteller can rule that the Tilt is unavoidable.\n     The Insane Tilt can also be triggered by a breaking point or Act of Hubris. If a character loses a dot of Wisdom or Integrity during combat, the Storyteller may apply the Insane Tilt then as well.\n     Some supernatural creatures possess mind-affecting powers that can apply this Tilt, even to characters who do not have an appropriate Condition. This includes mages using the Mind Flay spell.', end: '     The specific effects of this Tilt don’t normally last beyond the end of the scene. A character can try to force her mind to a state of balance, but it’s not easy. She must sit and focus on blocking out the craziness. She rolls Resolve + Composure as an instant action contested by a dice pool of (10 – her Willpower). She can’t take any other actions that turn and doesn’t apply Defense against any attacks.' },
            { name: 'INSENSATE', preDesc: '     The character shuts down, either due to extreme fear or sudden pleasure. He may huddle in a corner, cringe away from sudden noises, or stare into space as waves of pleasure lap over him', effect: 'The character can’t take any actions until the Tilt is resolved. He can apply Defense to incoming attacks, and if he takes any damage from an attack, he’s knocked free of whatever fogged his brain.', cause: '     Several supernatural powers can leave their victim in a trance-like state of heightened emotion, whether it’s a vampire’s mind-affecting tricks or the pants-shitting terror of witnessing a werewolf take on an inhuman form. A truly heroic amount of alcohol or a hallucinogenic drug might have similar effects; administering such a drug is a Dexterity + Weaponry attack, suffering a –1 modifier for the improvised weapon.', end: '     The Tilt wears off at the end of the scene. The victim can spend a point of Willpower before then to act normally for one turn. A successful attack will also end the Tilt. If a character has been knocked insensible by drugs, this Tilt is replaced with the Drugged Tilt when it ends.' },
            { name: 'KNOCKED DOWN', preDesc: '     Something knocks the character to the floor, either toppling her with a powerful blow to the chest or taking one of her legs out from under her.', effect: 'The character is knocked off her feet. If she hasn’t already acted this turn, she loses her action. Once she’s on the ground, a character is considered prone. The character can still apply Defense against incoming attacks, and can attempt to attack from the ground at a –2 penalty.', cause: '     Some weapons list “Knockdown” as a special effect of a damaging hit. Otherwise, a melee weapon with a damage modifier of +2 or greater, or a firearm with a damage modifier of +3 or more can be used to knock a character down with the force of the blow. Alternatively, a melee weapon or unarmed attack can knock an opponent down with a targeted attack against the legs (–2 modifier). The attacker declares that he wants to knock his opponent down and halves the total damage done (rounding down). On a successful attack, the target is knocked down.', end: '     The easiest way to end this Tilt is to stand up, which takes an action. A character affected by this Tilt who hasn’t yet acted can make a Dexterity + Athletics roll, minus any weapon modifier, instead of her normal action. If successful, she avoids the effects of this Tilt altogether. On a failure, she falls over and the Tilt applies as normal.' },
            { name: 'LEG WRACK', preDesc: '     Your leg feels like it’s going to snap clean off whenever you move; when you stop moving, you feel a burning numbness that encourages you to avoid moving.', effect: 'If your leg is broken, sprained, or dislocated, halve your Speed and suffer a –2 penalty on Physical rolls that require movement (and Defense). If both of your legs are wracked, you fall over — taking the Knocked Down Tilt — and cannot get up. Your Speed is reduced to 1; if you want to move at all, you cannot take any other action. Physical rolls that require movement are reduced to a chance die.', cause: '     Some supernatural powers can cripple a victim’s limbs or break bone with a touch. A character can have his leg knocked out by a targeted blow to the leg (–2 penalty) that deals more damage than the character’s Stamina.', end: '      If the Tilt is inflicted as a result of an attack, mark an ‘x’ under the leftmost Health box inflicted in that attack. The Tilt ends when that damage that caused it has healed. If the damage that inflicts this Tilt is aggravated, the character loses use of his leg permanently.' },
            { name: 'POOR LIGHT (ENVIRONMENTAL)', preDesc: '     Dim illumination, strobes, or flickering lights make it difficult to track movement and see clearly.', effect: ' Affected characters suffer a –2 penalty to visual-based Perception rolls, including ranged combat, rising to –3 at medium range and –4 at long range.', cause: '     This Tilt applies to scenes of “natural” darkness with dim ambient light, such as the outdoors at night away from urban light pollution, and to disconcerting environments like a nightclub with its effects system on.', end: '     Bring, find, or create a light source.' },
            { name: 'POISONED', preDesc: '     You’ve got poison inside you. It’s tearing you apart from the inside; burning like acid in your gut and making your head swim', effect: 'This Tilt applies a general sense of being poisoned to a character without worrying about Toxicity during combat. For the purposes of this Tilt, a poison is either “moderate” or “grave” — a moderate poison causes one point of bashing damage per turn of combat, while a grave poison ups that to one point of lethal damage per turn. If the Storyteller cares to continue the effects of the poison outside of combat, he can apply the standard rules for handling poisons and toxins when combat is complete.', cause: '      It’s possible for a character to not know that he’s been poisoned. It could be as innocuous as switching drinks with a pretty girl who is the target of a mob hit, or as simple as walking into a house with a carbon monoxide leak. That said, the main time poison comes up in combat is when one combatant inflicts it on another. Injecting your opponent with a syringe full of drain cleaner or snake venom is a Dexterity + Weaponry attack, suffering a –1 modifier for the improvised weapon.', end: '     Short of immediate medical attention — and how many fights take place in an emergency room? — all a victim can do is struggle on. Roll Stamina + Resolve as a reflexive action each turn that your character is poisoned. If your character intends to act (meaning, takes a non-reflexive action), the roll suffers a –3 penalty. Success counteracts the damage for one turn only.' },
            { name: 'SICK', preDesc: '     Your stomach churns. You retch and heave but only succeed in bringing up bile. Sweat beads on your brow as you spike a fever. Your muscles ache with every movement. You’re wracked with hot and cold flushes as a sickness gnaws away at your insides.', effect: 'This Tilt applies a general sickness to a character without worrying about the specific illness. For the purposes of this Tilt, a sickness is either “moderate” or “grave.” A moderate 324 appendix three: conditions and tiltssickness, such as a cold, asthma, the flu, or just a bad hangover, causes a –1 penalty to all actions during combat. That penalty increases by one every two turns (the first two turns, the character suffers a –1 penalty, the next two turns the penalty is –2, and so on up to a maximum of –5 dice on turn 9). A grave sickness, such as pneumonia, heavy metal poisoning, or aggressive cancer, inflicts the same dice pool penalties as a mild sickness. In addition, however, the physical stress of fighting or even defending oneself from an attacker while gravely ill inflicts one point of bashing damage per turn of combat.', cause: '     It’s not easy to deliberately make someone sick. Sure, if you can get your hands on a vial of smallpox or deliberately use a disease you’ve got to make someone sick (a breaking point, especially in the case of grave diseases like AIDS), then you’ve got a reasonable chance. Some supernatural creatures have abilities that can inflict diseases on others. Aside from that, you’ve just got to expose your opponent to the sickness long before you fight and hope for the best.', end: '     This Tilt reflects the effects of sickness as it specifically applies to combat. Outside of combat, use the existing system for diseases (p. 223). The penalties inflicted by this Tilt fade at a rate of one point per turn once the character has a chance to rest, but any damage inflicted remains until the character can heal.' },
            { name: 'STUNNED', preDesc: '     Your character is dazed and unable to think straight. Maybe her vision blurs. If she’s stunned as a result of a blow to the head, she’s probably got a concussion.', effect: ' A character with the Stunned Tilt loses her next action, and halves her Defense until she can next act.', cause: '      much damage as her Size in a single hit. Some weapons have a “stun” special ability. These double the weapon modifier only for the purposes of determining whether the attacker inflicts the Stunned Tilt. Attacks against the target’s head (see Specified Targets, p.220) count the character’s Size as one lower for the purposes of this Tilt. The Storyteller might determine that additional effects cause this Tilt, like being caught in the blast area of an explosion.', end: '     The effects of this Tilt normally only last for a single turn. The character can end the Tilt during her own action by reflexively spending a point of Willpower to gather her wits, though she suffers a –3 modifier to any actions she takes that turn.' },
        ]
        return t;
    }


    infoMatrix = [
        { gnosis: 0, ritual: 1, interval: 'Eternity', traitMax: 0, yantras: 0, paradox: 0, combinedSpells: 0, obsessions: 0, mana: 0, perTurn: 0, highestArcanumMax: 0, otherArcanumMax: 0 },
        { gnosis: 1, ritual: 3, interval: 'Hours', traitMax: 5, yantras: 2, paradox: 1, combinedSpells: 1, obsessions: 1, mana: 10, perTurn: 1, highestArcanumMax: 3, otherArcanumMax: 2 },
        { gnosis: 2, ritual: 3, interval: 'Hours', traitMax: 5, yantras: 2, paradox: 1, combinedSpells: 1, obsessions: 1, mana: 11, perTurn: 2, highestArcanumMax: 3, otherArcanumMax: 3 },
        { gnosis: 3, ritual: 1, interval: 'Hour', traitMax: 5, yantras: 3, paradox: 2, combinedSpells: 2, obsessions: 2, mana: 12, perTurn: 3, highestArcanumMax: 4, otherArcanumMax: 3 },
        { gnosis: 4, ritual: 1, interval: 'Hour', traitMax: 5, yantras: 3, paradox: 2, combinedSpells: 2, obsessions: 2, mana: 13, perTurn: 4, highestArcanumMax: 4, otherArcanumMax: 4 },
        { gnosis: 5, ritual: 30, interval: 'Minutes', traitMax: 5, yantras: 4, paradox: 3, combinedSpells: 2, obsessions: 2, mana: 15, perTurn: 5, highestArcanumMax: 5, otherArcanumMax: 4 },
        { gnosis: 6, ritual: 30, interval: 'Minutes', traitMax: 6, yantras: 4, paradox: 3, combinedSpells: 3, obsessions: 3, mana: 20, perTurn: 6, highestArcanumMax: 5, otherArcanumMax: 5 },
        { gnosis: 7, ritual: 10, interval: 'Minutes', traitMax: 7, yantras: 5, paradox: 4, combinedSpells: 3, obsessions: 3, mana: 25, perTurn: 7, highestArcanumMax: 5, otherArcanumMax: 5 },
        { gnosis: 8, ritual: 10, interval: 'Minutes', traitMax: 8, yantras: 5, paradox: 4, combinedSpells: 3, obsessions: 3, mana: 30, perTurn: 8, highestArcanumMax: 5, otherArcanumMax: 5 },
        { gnosis: 9, ritual: 1, interval: 'Minute', traitMax: 9, yantras: 6, paradox: 5, combinedSpells: 4, obsessions: 4, mana: 50, perTurn: 10, highestArcanumMax: 5, otherArcanumMax: 5 },
        { gnosis: 10, ritual: 1, interval: 'Minute', traitMax: 10, yantras: 6, paradox: 5, combinedSpells: 4, obsessions: 4, mana: 75, perTurn: 15, highestArcanumMax: 5, otherArcanumMax: 5 },
    ];
}