if(NOT TARGET ReactAndroid::hermestooling)
add_library(ReactAndroid::hermestooling SHARED IMPORTED)
set_target_properties(ReactAndroid::hermestooling PROPERTIES
    IMPORTED_LOCATION "/Users/praddoom/.gradle/caches/8.10.2/transforms/ac7d084a0632c39728c6765afd8fd0e4/transformed/react-android-0.76.0-release/prefab/modules/hermestooling/libs/android.arm64-v8a/libhermestooling.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/praddoom/.gradle/caches/8.10.2/transforms/ac7d084a0632c39728c6765afd8fd0e4/transformed/react-android-0.76.0-release/prefab/modules/hermestooling/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET ReactAndroid::jsctooling)
add_library(ReactAndroid::jsctooling SHARED IMPORTED)
set_target_properties(ReactAndroid::jsctooling PROPERTIES
    IMPORTED_LOCATION "/Users/praddoom/.gradle/caches/8.10.2/transforms/ac7d084a0632c39728c6765afd8fd0e4/transformed/react-android-0.76.0-release/prefab/modules/jsctooling/libs/android.arm64-v8a/libjsctooling.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/praddoom/.gradle/caches/8.10.2/transforms/ac7d084a0632c39728c6765afd8fd0e4/transformed/react-android-0.76.0-release/prefab/modules/jsctooling/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET ReactAndroid::jsi)
add_library(ReactAndroid::jsi SHARED IMPORTED)
set_target_properties(ReactAndroid::jsi PROPERTIES
    IMPORTED_LOCATION "/Users/praddoom/.gradle/caches/8.10.2/transforms/ac7d084a0632c39728c6765afd8fd0e4/transformed/react-android-0.76.0-release/prefab/modules/jsi/libs/android.arm64-v8a/libjsi.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/praddoom/.gradle/caches/8.10.2/transforms/ac7d084a0632c39728c6765afd8fd0e4/transformed/react-android-0.76.0-release/prefab/modules/jsi/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET ReactAndroid::reactnative)
add_library(ReactAndroid::reactnative SHARED IMPORTED)
set_target_properties(ReactAndroid::reactnative PROPERTIES
    IMPORTED_LOCATION "/Users/praddoom/.gradle/caches/8.10.2/transforms/ac7d084a0632c39728c6765afd8fd0e4/transformed/react-android-0.76.0-release/prefab/modules/reactnative/libs/android.arm64-v8a/libreactnative.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/praddoom/.gradle/caches/8.10.2/transforms/ac7d084a0632c39728c6765afd8fd0e4/transformed/react-android-0.76.0-release/prefab/modules/reactnative/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

