# react-native-progress-rings


## Examples

### Basic Ring
```
<ActivityRings
  strokeWidth={10}
  radius={50}
  strokeColor="#22A9EA"
  strokeSecondaryColor="#28FFAE"
  percentage={80}
/>
```


### Multiples Rings
```
<ActivityRings
  radius={85}
  multiple={
    [
      {
        strokeWidth: 15,
        radius: 75,
        strokeColor: '#EDAD2B',
        strokeSecondaryColor: '#DF1B47',
        percentage: 40,
      },
      {
        strokeWidth: 15,
        radius: 58,
        strokeColor: '#28FFAE',
        strokeSecondaryColor: '#22A9EA',
        percentage: 60,
      },
      {
        strokeWidth: 15,
        radius: 36,
        strokeColor: '#802BED',
        strokeSecondaryColor: '#C41BDF',
        percentage: 80,
      }
    ]
  }
/>
```