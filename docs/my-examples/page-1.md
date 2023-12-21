# EXAMPLE: Collector - Luau Module
Made for the usage of Luau in Roblox.

::: warning CLEARING
Collector functions will not run if the passed collector has `Clearing` set to true. 
:::

## Types

```lua
export type CollectorCache = {
	Object: unknown, -- reference to the object.
	CleanupMethod: string? -- In preparation for when to be cleaned up.
}

export type Collection = {
	_cache: { CollectorCache }, -- internal collection of objects
	Clearing: boolean, -- if the collection is operating the `clear` function.
	Size: number -- The amount of objects inside of the collection.
}
```

## `Collector.new`

Returns a new `Collection` class.

### Arguments
```lua
Collector.new(
    initalSize: number?
): Collection
```

### Example
```lua
local collection = Collector.new(1)
```

## `Collector.Is`

Returns a boolean depending on if the passed collection is a `Collection` class.

### Arguments
```lua
Collector.Is(
    collection: Collection
): boolean
```

### Example
```lua
local collection = Collector.new(0)
local list = {}

print(
    "collection:", Collector.Is(collection), --> true
    "list:", Collector.Is(list) --> false
)
```

## `Collector.insert`

Inserts an object to the passed collection. `cleanupMethod` allows you to modify how the passed object will be handled. (refer to `FindCleanupMethod`)

### Arguments
```lua
Collector.insert(
    collection: Collection,
    object: unknown,
    cleanupMethod: string?
): ()
```

### Example
```lua
local collection = Collector.new(2)
local object = {
    AlternateDestroy = function()

    end

    Destroy = function()

    end,
}

Collector.insert(collection, object) --> CleanupMethod: "Destroy"
Collector.insert(collection, object, "AlternateDestroy") --> CleanupMethod: "AlternateDestroy"
```
::: INFO Double Inserting
You cannot insert insert the same value multiple
time
:::

## `Collector.remove`

Removes an object from the collection with the option to disable the cleanup process through setting `skipCleanup` to true.

Returns a boolean depending on if the passed object has been removed.

### Arguments
```lua
Collector.remove(
    collector: Collection,
    object: unknown,
    skipCleanup: boolean?
): boolean
```

### Example
```lua
local collection = Collector.new(2)
local object = ...
local object2 = ...

Collector.insert(collection, object)
Collector.insert(collection, object2)

Collector.remove(collection, object)
Collector.remove(collection, object2, true)

local removed = Collector.remove(collection, ...)

print(
    "object:", object, --> nil
    "object2:", object2, --> Part
    "object3 removed:", removed --> false
)
```

## `Collector.hasObject`

Checks if the passed `object` is in the collection.

### Arguments
```lua
Collector.hasObject(
    collector: Collection,
    object: unknown
): boolean
```

### Example
```lua
local collection = Collector.new(1)
local object = ...

print(
    Collector.hasObject(collection, object), --> false
)

Collector.insert(collection, object)

print(
    Collector.hasObject(collection, object) --> true
)
```

## `Collector.clear`

Removes all objects from the collection, with the option to disable the cleanup process through setting `skipCleanup` to true.

### Arguments

```lua
Collector.clear(
    collection: Collection,
    skipCleanup: boolean?
): ()
```

### Example
```lua
local objectA, objectB, objectC = ...

local function makeCollection()
    local collection = Collector.new(3)

    collection.insert(collection, objectA)
    collection.insert(collection, objectB)
    collection.insert(collection, objectC)

    return collection
end

local collectionA = makeCollection()
local collectionB = makeCollection()

Collector.clear(collectionA, true)

print(
    "objects:", objectA, objectB, objectC --> Part, Part, Part
)

Collector.clear(collectionB)

print(
    "after objects:", objectA, objectB, objectC --> nil, nil, nil
)
```